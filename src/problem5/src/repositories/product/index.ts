import prismaClient from "../../config/prisma";
import { CreateProductRepoType, FilterProductRepoType, UpdateProductRepoType } from "./product.type";

export const createProduct = async (product: CreateProductRepoType): Promise<number> => {
    const newProduct = await prismaClient.products.create({
        data: product
    })

    return newProduct.id
}

export const getProductById = async (id: number) => {
    const foundProduct = await prismaClient.products.findUnique({
        where: {
            id: id
        }
    })

    return foundProduct
}

export const getProductsByFilter = async (filter: FilterProductRepoType) => {
    const foundProducts = await prismaClient.products.findMany({
        where: filter
    })

    return foundProducts
}

export const updateProduct = async (product: UpdateProductRepoType) => {
    const foundProduct = await prismaClient.products.findUnique({
        where: {
            id: product.id
        }
    })  

    if (!foundProduct) {
        return null
    }

    const updatedProduct = await prismaClient.products.update({
        where: {
            id: product.id
        },
        data: {
            name: product.name,
            price: product.price,
            type: product.type,
            stock: product.stock,
            address: product.address,
            description: product.description
        }
    })

    return updatedProduct
}

export const deleteProduct = async (id: number) => {
    const foundProduct = await prismaClient.products.findUnique({
        where: {
            id: id
        }
    })

    if (!foundProduct) {
        return null
    }

    const deletedProduct = await prismaClient.products.delete({
        where: {
            id: id
        }
    })

    return deletedProduct
}