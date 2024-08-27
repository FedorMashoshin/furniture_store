interface Rating {
    average: number;
    reviews: number;
}

export interface IProduct {
    _id: string;
    name: string;
    imageUrl: string;
    price: number;
    stock: number;
    ratings: Rating;
}