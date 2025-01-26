import prismaClient from "../../config/prisma";
import { BadRequestError } from "../../core/error.response";
import { CreateProductRepoType, FilterCondition, FilterProductRepoType, UpdateProductRepoType } from "./product.type";

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
    const condition = Object.keys(filter).reduce<FilterCondition>((acc, key) => {
        if (key === "name" && filter.name) {
            acc.name = {
                contains: filter.name,
            };
        }

        if (key === "maxPrice" && filter.maxPrice) {
            acc.price = {
                lte: filter.maxPrice,
            };
        }

        if (key === "type" && filter.type) {
            acc.type = {
                contains: filter.type,
            };
        }
        return acc;
    }, {})

    const foundProducts = await prismaClient.products.findMany({
        where: condition
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