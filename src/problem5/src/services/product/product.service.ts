import { NotFoundError } from "../../core/error.response";
import { createProduct, deleteProduct, getProductById, getProductsByFilter, updateProduct } from "../../repositories/product";
import { filterNoneValueObject } from "../../utils";
import { CreateProductType, FilterProductType, UpdateProductType } from "./product.type";

class ProductService {
    static async createProduct(product: CreateProductType) {
        const productId = await createProduct(product);
        return productId;
    }

    static async getProductDetails(productId: number) {
        const product = await getProductById(productId);
        if (!product) {
            throw new NotFoundError("Product not found");
        }

        const result = filterNoneValueObject(product);

        return result;
    }


    static async getProductsByFilter(filter: FilterProductType) {
        const products = await getProductsByFilter(filter);
        const result = products.map(product => filterNoneValueObject(product));
        return result;  
    }

    static async updateProductDetails(productId: number, product: UpdateProductType) {
        const updatedProduct = await updateProduct({
            id: productId,
            ...product
        }); 

        if (!updatedProduct) {
            throw new NotFoundError("Product not found");
        }

        return updatedProduct.id;  
    }

    static async deleteProduct(productId: number) {
        const deletedProduct = await deleteProduct(productId);

        if (!deletedProduct) {
            throw new NotFoundError("Product not found");
        }

        return deletedProduct.id;
    }
}

export default ProductService;
