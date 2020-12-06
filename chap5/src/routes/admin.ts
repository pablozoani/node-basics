import { Router } from "express";
import { products } from "../index";
import path from "path";
import rootDir from "./pathHelper";

const router = Router();

router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
    products.push(req.body.productName);
    res.redirect("/");
});

export default router;
