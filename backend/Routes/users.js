import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} from "../Controllers/users.js";

const router = express.Router();

// GET - listar usuários
router.get("/", getUsers);

// GET - obter usuário por ID
router.get("/:id", getUserById);

// POST - criar novo usuário
router.post("/", createUser);

// PUT - editar usuário
router.put("/:id", updateUser);

// DELETE - deletar usuário
router.delete("/:id", deleteUser);

export default router;
