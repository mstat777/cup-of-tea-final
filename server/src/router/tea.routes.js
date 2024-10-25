import { Router } from "express";

import { 
    getAllTeas, 
    getTeaByValues,
    getLastTea
} from "../controller/tea.js";

const router = Router();

// ROUTES APP
router.get("/all", getAllTeas);
router.get("/:url_tea/:id", getTeaByValues);
router.get("/last", getLastTea);

export default router;