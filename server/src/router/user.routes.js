import { Router } from "express";

import { checkToken, signIn, createAccount } from "../controller/user.js";
import { auth } from "../middlewares/auth.js"

const router = Router();

router.get("/check_token", auth, checkToken);

router.post("/signin", signIn);
router.post("/signup", createAccount);


export default router;