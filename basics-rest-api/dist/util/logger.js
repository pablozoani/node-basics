"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRequest = void 0;
var logRequest = function (req) {
    console.log();
    console.log("### Request Headers\n", req.headers);
    console.log("### Request URL\n", req.url);
    console.log("### Request Parameters\n", req.params);
    console.log("### Request Query\n", req.query);
    console.log("### Request Method\n", req.method);
    console.log("### Request Body\n", req.body);
};
exports.logRequest = logRequest;
