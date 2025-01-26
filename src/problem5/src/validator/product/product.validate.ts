import { body, checkExact, param, query } from "express-validator";
import { validate } from "..";

export const validateCreateProduct = () =>
    validate([
        body("name").isString(),
        body("price").isNumeric(),
        body("stock").isNumeric(),
        body("type").isString(),
        body("description").isString().optional(),
        body("address").isString().optional(),
        checkExact(),
    ]);

export const validateUpdateProduct = () => 
    validate([
        param("productId").isNumeric(),
        checkExact(),
    ])

export const validateGetProductDetails = () =>
    validate([
        param("productId").isNumeric(),
        checkExact(),
    ]);

export const validateDeleteProduct = () =>
    validate([
        param("productId").isNumeric(),
        checkExact(),
    ]);

export const validateGetProductsByFilter = () =>
    validate([
        query("name").isString().optional(),
        query("type").isString().optional(),
        query("maxPrice").isNumeric().optional().toFloat(),
        checkExact(),
    ])