import { Router } from "express";

import { getAllTeas, getByValues } from "../controller/tea.js";

const router = Router();

// ROUTES APP
router.get("/all", getAllTeas);

router.get("/:url_tea/:id", getByValues)

export default router;