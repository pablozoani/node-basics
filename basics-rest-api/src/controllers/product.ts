import { RequestHandler } from "express";
import Product from "../model/product";
import { logRequest } from "../util/logger";

let sequence = 0;
const products: Product[] = [];

export const save: RequestHandler = (req, res, next) => {
    logRequest(req);
    const title = (req.body as { title: string }).title;
    const product = new Product((sequence++).toString(), title);
    products.push(product);
    res.status(201).json({
        createdProduct: product
    });
};

export const findAll: RequestHandler = (req, res, next) => {
    res.status(200).json({
        products: products
    });
};

export const patchById: RequestHandler<{ id: string }> = (req, res, next) => {
    const id = req.params.id;
    const foundProduct = products.find(el => el.id === id);
    if (foundProduct !== undefined) {
        foundProduct.title = req.body.title;
        res.status(200).json({
            updatedProduct: foundProduct
        });
    } else {
        res.status(404).json({ message: `NOT FOUND, ID: ${id}` });
    }
};

export const deleteById: RequestHandler<{ id: string }> = (req, res, next) => {
    const id = req.params.id;
    const idx = products.findIndex((el, idx, arr) => el.id === id);
    if (idx < 0) {
        res.status(404).json({ message: `NOT FOUND, ID: ${id}` });
    } else {
        const [removedProduct] = products.splice(idx, 1);
        res.status(200).json({ deletedProduct: removedProduct });
    }
};
