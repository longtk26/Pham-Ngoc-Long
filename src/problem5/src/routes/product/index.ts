import { Router } from "express";
import { asyncHandler } from "../../helper/asyncHandler";
import productController from "../../controllers/product.controller";
import {
    validateCreateProduct,
    validateGetProductDetails,
    validateGetProductsByFilter,
    validateUpdateProduct,
} from "../../validator/product/product.validate";

const productRoute = Router();

productRoute.post(
    "/",
    validateCreateProduct(),
    asyncHandler(productController.createProduct)
);
productRoute.get(
    "/:productId",
    validateGetProductDetails(),
    asyncHandler(productController.getProductDetails)
);
productRoute.get(
    "/",
    validateGetProductsByFilter(),
    asyncHandler(productController.getProductsByFilter)
);
productRoute.put(
    "/:productId",
    validateUpdateProduct(),
    asyncHandler(productController.updateProductDetails)
);
productRoute.delete(
    "/:productId",
    validateUpdateProduct(),
    asyncHandler(productController.deleteProduct)
);

export default productRoute;
