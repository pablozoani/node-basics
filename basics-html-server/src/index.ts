import express, { Express } from "express";
import { urlencoded } from "body-parser";
import adminRouter from "./routes/admin";
import shopRouter from "./routes/shop";
import path from "path";
import rootDir from "./routes/pathHelper";

export const products: string[] = [];

const app: Express = express();

// parses the request body and calls next().
app.use(urlencoded());

app.use(express.static(path.join(rootDir, "public")));

// paths starting with /admin are routed to adminRouter
app.use("/admin", adminRouter);

app.use(shopRouter);

// if the request reaches here, send 404.
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000, "localhost");
