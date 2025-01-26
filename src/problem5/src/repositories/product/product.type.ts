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
    maxPrice?: number,
    type?: string,
}

export type FilterCondition = {
    name?: {
      contains: string;
    };
    price?: {
      lte: number;
    };
    type?: {
      contains: string;
    };
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