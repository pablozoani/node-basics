"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const admin_1 = __importDefault(require("./routes/admin"));
const shop_1 = __importDefault(require("./routes/shop"));
const path_1 = __importDefault(require("path"));
const pathHelper_1 = __importDefault(require("./routes/pathHelper"));
exports.products = [];
const app = express_1.default();
app.use(body_parser_1.urlencoded());
app.use(express_1.default.static(path_1.default.join(pathHelper_1.default, "public")));
app.use("/admin", admin_1.default);
app.use(shop_1.default);
app.use((req, res, next) => {
    res.status(404).sendFile(path_1.default.join(pathHelper_1.default, "views", "404.html"));
});
app.listen(3000, "localhost");
