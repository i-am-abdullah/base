import { Request, Response, RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/User';
import jwt from 'jsonwebtoken';

const generateAccessToken = (payload: object) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '3h' });
  };
  
  const generateRefreshToken = (payload: object) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET!, { expiresIn: '5d' });
  };

export const registerUser: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
      const { fullName, username, email, password } = req.body;
  
      const existingUser = await User.findOne({
        $or: [{ username }, { email }],
      });
  
      if (existingUser) {
        res.status(400).json({ message: 'Username or email already exists' });
        return;
      }
  
      const newUser = new User({
        fullName,
        username,
        email,
        password,
      });
  
      const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));
      newUser.password = hashedPassword;
      await newUser.save();
  
      res.status(201).json({
        message: 'User registered successfully',
        user: { fullName, username, email },
      });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  export const loginUser: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
      const { username, email, password } = req.body;
  
      const user = await User.findOne({
        $or: [{ username }, { email }],
      });
  
      if (!user) {
        res.status(400).json({ message: 'Invalid credentials' });
        return;
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(400).json({ message: 'Invalid credentials' });
        return;
      }
  
      const accessToken = generateAccessToken({ userId: user.id, username: user.username, email: user.email });
      const refreshToken = generateRefreshToken({ userId: user.id, username: user.username, email: user.email });
  
      res.status(200).json({
        message: 'Login successful',
        accessToken,
        refreshToken,
      });
    } catch (error) {
      console.error('Error logging in user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };