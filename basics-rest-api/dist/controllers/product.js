"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.patchById = exports.findAll = exports.save = void 0;
var product_1 = __importDefault(require("../model/product"));
var sequence = 0;
var products = [];
var save = function (req, res, next) {
    var title = req.body.title;
    var product = new product_1.default((sequence++).toString(), title);
    products.push(product);
    res.status(201).json({
        createdProduct: product
    });
};
exports.save = save;
var findAll = function (req, res, next) {
    res.status(200).json({
        products: products
    });
};
exports.findAll = findAll;
var patchById = function (req, res, next) {
    var id = req.params.id;
    var foundProduct = products.find(function (el) { return el.id === id; });
    if (foundProduct !== undefined) {
        foundProduct.title = req.body.title;
        res.status(200).json({
            updatedProduct: foundProduct
        });
    }
    else {
        res.status(404).json({ message: "NOT FOUND, ID: " + id });
    }
};
exports.patchById = patchById;
var deleteById = function (req, res, next) {
    var id = req.params.id;
    var idx = products.findIndex(function (el, idx, arr) { return el.id === id; });
    if (idx < 0) {
        res.status(404).json({ message: "NOT FOUND, ID: " + id });
    }
    else {
        var removedProduct = products.splice(idx, 1)[0];
        res.status(200).json({ deletedProduct: removedProduct });
    }
};
exports.deleteById = deleteById;
