import express from 'express';
import { addToCart, updateCart, getUserCart, clearCart } from '../controllers/cart.controller.js';
import authUser from '../middlewares/auth.js';

const router = express.Router();

router.post('/get', authUser, getUserCart);
router.post('/add', authUser, addToCart);
router.post('/update', authUser, updateCart);
router.post("/clear", authUser, clearCart);

export default router;