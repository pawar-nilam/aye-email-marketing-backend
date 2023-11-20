import express from "express";
import { getAllUsers, getUserById, updateUser, deleteUser } from "../controllers/userController";

const router = express.Router();

router.put("/user:id", updateUser);
router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.delete("/user/:id", deleteUser);

export default router;
