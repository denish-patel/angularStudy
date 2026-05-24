
export interface IProduct {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    type:string;
    stock:number;
    brand:string;
    discountedPrice:number;
    oldPrice:number;
    rating: IProductRating;
    isNew:boolean;
}

export interface IProductRating {
    rate: number;
    count: number;
}

export interface IAddProduct {
    category: string;
    description: string;
    price: number;
    title: string;
    type:string;
    stock:number;
    brand:string;
    discountedPrice:number;
    oldPrice:number;
}