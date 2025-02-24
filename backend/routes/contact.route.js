import express from "express";
import { getAllMessages, submitContactForm } from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/message", submitContactForm);
router.get("/message", getAllMessages);


export default router;
