export type CreateProductRepoType = {
    name: string,
    price: number,
    type: string,
    stock: number,
    address?: string,
    description?: string,
}

export type FilterProductRepoType = {
    name?: string,
    price?: number,
    type?: string,
    stock?: number,
}

export type UpdateProductRepoType = {
    id: number,
    name?: string,
    price?: number,
    type?: string,
    stock?: number,
    address?: string,
    description?: string,
}