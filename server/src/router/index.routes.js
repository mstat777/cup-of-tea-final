import { Router } from "express";

import tea_routes from "./tea.routes.js";
import user_routes from "./user.routes.js";
import category_routes from "./category.routes.js";

const router = Router();

router.use("/api/v1/tea", tea_routes);
router.use("/api/v1/user", user_routes);
router.use("/api/v1/category", category_routes);

router.get("*", (req, res) => {
    res.status(404).json({ msg: "not found"})
});

export default router;