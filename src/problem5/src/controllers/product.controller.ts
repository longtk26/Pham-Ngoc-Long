import { Request, Response } from "express";
import { CREATED, SuccessReponse } from "../core/success.response";
import ProductService from "../services/product/product.service";

class ProductController {

    async createProduct(req: Request, res: Response) {
        new CREATED({
            message: "Product created successfully",
            metadata: {
                resource: await ProductService.createProduct(req.body)
            }
        }).send(res);
    }

    async getProductDetails(req: Request, res: Response) {
        new SuccessReponse({
            message: "Product details",
            metadata: {
                resource: await ProductService.getProductDetails(Number(req.params.productId))
            }
        }).send(res);
    }

    async getProductsByFilter(req: Request, res: Response) {
        new SuccessReponse({
            message: "List of products",
            metadata: {
                resource: await ProductService.getProductsByFilter(req.query)
            }
        }).send(res);
    }

    async updateProductDetails(req: Request, res: Response) {
        new SuccessReponse({
            message: "Product updated successfully",
            metadata: {
                resource: await ProductService.updateProductDetails(Number(req.params.productId), req.body)
            }
        }).send(res);
    }

    async deleteProduct(req: Request, res: Response) {
        new SuccessReponse({
            message: "Product deleted successfully",
            metadata: {
                resource: await ProductService.deleteProduct(Number(req.params.productId))
            }
        }).send(res);
    }
}

export default new ProductController();