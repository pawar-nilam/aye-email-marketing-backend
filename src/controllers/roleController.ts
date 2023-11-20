import { Request, Response } from 'express';
import RoleModel from '../models/role';

export const getAllRoles = async (req: any, res: Response): Promise<void> => {
  try {
    const roles = await RoleModel.find();
    res.status(200).json(roles);
  } catch (error) {
    console.error('Error in getAllRoles', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getRoleById = async (req: Request, res: Response): Promise<void> => {
  try {
    const roleId = req.params.id;
    const roleDetails = await RoleModel.findById(roleId);

    if (!roleDetails) {
      res.status(404).json({ error: 'Role not found' });
      return;
    }

    res.status(200).json(roleDetails);
  } catch (error) {
    console.error('Error in getRoleById', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getRoleByName = async (req: Request, res: Response): Promise<void> => {
    try {
      const name = req.params.name;
      const roleDetails = await RoleModel.find({ name : name });
  
      if (!roleDetails) {
        res.status(404).json({ error: 'Role not found' });
        return;
      }
  
      res.status(200).json(roleDetails);
    } catch (error) {
      console.error('Error in getRoleById', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const updateRole = async (req: Request, res: Response): Promise<void> => {
  try {
    const roleId = req.params.id;
    const updatedRoleInfo = req.body;

    const roleDetails = await RoleModel.findByIdAndUpdate(roleId, updatedRoleInfo, { new: true });

    if (!roleDetails) {
      res.status(404).json({ error: 'Role not found' });
      return;
    }
    res.status(200).json({ message: 'Role updated successfully', roleDetails });
  } catch (error) {
    console.error('Error in updateRole', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteRole = async (req: Request, res: Response): Promise<void> => {
  try {
    const roleId = req.params.id;
    const roleDetails = await RoleModel.findByIdAndDelete(roleId);

    if (!roleDetails) {
      res.status(404).json({ error: 'Role not found' });
      return;
    }

    res.status(200).json({ message: 'Role deleted successfully', roleDetails });
  } catch (error) {
    console.error('Error in deleteRole', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
