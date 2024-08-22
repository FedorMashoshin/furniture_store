import React from "react";

interface Product {
    _id: string;
    name: string;
    imageUrl: string;
    price: number;
}

const Product: React.FC<Product> = ({ _id, name, imageUrl, price }) => {
    return (
        <div key={_id}>
            <img src={imageUrl} alt={name} />
            <h2>{name}</h2>
            <h4>${price.toFixed(2)}</h4>
        </div>
    );
};

export default Product;
