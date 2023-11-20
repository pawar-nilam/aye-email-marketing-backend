import { Request, Response } from 'express';
import UserModel from '../models/user';

export const getAllUsers = async (req: any, res: Response): Promise<void> => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error in getAllUsers', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.id;
    const userDetails = await UserModel.findById(userId);

    if (!userDetails) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.status(200).json(userDetails);
  } catch (error) {
    console.error('Error in getUserById', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.id;
    const updatedUserInfo = req.body;

    const userDetails = await UserModel.findByIdAndUpdate(userId, updatedUserInfo, { new: true });

    if (!userDetails) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.status(200).json({ message: 'User updated successfully', userDetails });
  } catch (error) {
    console.error('Error in updateUser', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.id;
    const userDetails = await UserModel.findByIdAndDelete(userId);

    if (!userDetails) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.status(200).json({ message: 'User deleted successfully', userDetails });
  } catch (error) {
    console.error('Error in deleteUser', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
