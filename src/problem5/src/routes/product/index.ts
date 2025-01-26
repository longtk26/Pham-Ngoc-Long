import { Router } from "express";
import { asyncHandler } from "../../helper/asyncHandler";
import productController from "../../controllers/product.controller";

const productRoute = Router();


productRoute.post("/", asyncHandler(productController.createProduct));
productRoute.get("/:productId", asyncHandler(productController.getProductDetails));
productRoute.get("/", asyncHandler(productController.getProductsByFilter));
productRoute.put("/:productId", asyncHandler(productController.updateProductDetails));
productRoute.delete("/:productId", asyncHandler(productController.deleteProduct));

export default productRoute;