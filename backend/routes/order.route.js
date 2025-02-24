import express from "express";
import {placeOrder, placeOrderStripe, verifyStripe, placeOrderRazorpay, verifyRazorpay, allOrders, userOrders, updateStatus} from "../controllers/order.controller.js";
import adminAuth from "../middlewares/admin.auth.js";
import authUser from "../middlewares/auth.js";

const router = express.Router()

router.post('/list', adminAuth, allOrders)
router.post('/status', adminAuth, updateStatus)
router.post('/place', authUser, placeOrder)
router.post('/stripe', authUser, placeOrderStripe)
router.post('/razorpay', authUser, placeOrderRazorpay)
router.post('/userorders', authUser, userOrders)
router.post('/verifyStripe', authUser, verifyStripe)
router.post('/verifyRazorpay', authUser, verifyRazorpay)

export default router;