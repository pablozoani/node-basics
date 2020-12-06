"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("../index");
const path_1 = __importDefault(require("path"));
const pathHelper_1 = __importDefault(require("./pathHelper"));
const router = express_1.default.Router();
router.get("/add-product", (req, res, next) => {
    res.sendFile(path_1.default.join(pathHelper_1.default, "views", "add-product.html"));
});
router.post("/add-product", (req, res, next) => {
    console.log("ADD PRODUCT");
    index_1.products.push(req.body.productName);
    res.redirect("/");
});
exports.default = router;
