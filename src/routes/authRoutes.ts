import { Router } from 'express';
import { registerUser, loginUser, refreshToken, validateUser } from '../controllers/authController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/refresh-token', refreshToken);
router.get('/validate', protect, validateUser);

export default router;
