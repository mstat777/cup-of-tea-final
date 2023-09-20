import express from "express";
import session from "express-session";

import cors from "cors";

import "dotenv/config";

import { setSession } from "./config/session.js";
import router from "./router/index.routes.js";

const PORT = process.env.PORT || process.env.LOCAL_PORT;

const app = express();

app.use(express.static("public"))
    .use(cors())
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(router);

app.listen(PORT, () => console.log(`running on http://localhost:${PORT}`));