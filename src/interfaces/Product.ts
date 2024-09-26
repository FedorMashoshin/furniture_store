interface Rating {
    average: number;
    reviews: number;
}

export interface IProduct {
    _id: string;
    name: string;
    imageUrl: string;
    imageUrl2: string;
    price: number;
    stock: number;
    ratings: Rating;
    description: string;
    category: string;
    dimensions: ProductDimensions;
    weight: number;
    color: string;
    material: string;
    brand: string;
    tags: string[];
}

interface ProductDimensions {
    depth: number;
    width: number;
    height: number;
}
