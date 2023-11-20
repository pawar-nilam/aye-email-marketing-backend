import express from "express";
import { getAllRoles, getRoleById, getRoleByName, updateRole, deleteRole } from "../controllers/roleController";

const router = express.Router();

router.put("/user:id", updateRole);
router.get("/user", getAllRoles);
router.get("/user/:id", getRoleById);
router.get("/user/:name", getRoleByName);
router.delete("/user/:id", deleteRole);

export default router;
