import express, { Express } from "express";
import { json } from "body-parser";
import cors from "cors";

import productRoutes from "./routes/product";

const app: Express = express();

app.use(json());
app.use(cors());

app.use("/products", productRoutes);

app.use(
    (
        err: Error,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        res.status(500).json({ message: err.message });
    }
);

app.listen(3001);
