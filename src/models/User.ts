import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IUser extends Document {
  fullName: string;
  username: string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  fullName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);
