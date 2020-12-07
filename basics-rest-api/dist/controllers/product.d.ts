import { RequestHandler } from "express";
export declare const save: RequestHandler;
export declare const findAll: RequestHandler;
export declare const patchById: RequestHandler<{
    id: string;
}>;
export declare const deleteById: RequestHandler<{
    id: string;
}>;
