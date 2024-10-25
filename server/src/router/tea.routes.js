import { Router } from "express";

import { 
    getAllTeas, 
    getLastTea,
    getBestSeller,
    getFavourite,
    getTeaPackages,
    getTeaByURL,
} from "../controller/tea.js";

const router = Router();

// ROUTES APP
router.get("/all", getAllTeas);
router.get("/last", getLastTea);
router.get("/best-seller", getBestSeller);
router.get("/favourite", getFavourite);
router.get("/packages/:id", getTeaPackages);
router.get("/:id/:url_tea", getTeaByURL);

export default router;