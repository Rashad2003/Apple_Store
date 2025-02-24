import express from "express";
import { loginUser, registerUser, adminLogin } from "../controllers/user.controller.js";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/admin', adminLogin);

export default router;