import { Router } from "express";
import { createOrder } from "../controller/order.js";

const router = Router();

router.post("/create", createOrder);

export default router;