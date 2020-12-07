import { Router } from "express";
import { deleteById, findAll, patchById, save } from "../controllers/product";

const router = Router();
router.post("/", save);
router.get("/", findAll);
router.patch("/:id", patchById);
router.delete("/:id", deleteById);

export default router;
