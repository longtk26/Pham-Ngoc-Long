export type CreateProductType = { 
    name: string, 
    price: number,
    type: string,
    stock: number,
    address?: string,
    description?: string,
}

export type UpdateProductType = {
    name?: string,
    price?: number,
    type?: string,
    stock?: number,
    address?: string,
    description?: string,
}

export type FilterProductType = {
    name?: string,
    type?: string,
    maxPrice?: number,
}