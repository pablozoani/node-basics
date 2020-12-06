import { Router } from "express";
import path from "path";
import rootDir from "./pathHelper";

const router = Router();

router.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "shop.html"));
});

export default router;
