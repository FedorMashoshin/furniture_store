import React from "react";
import styles from "./Product.module.css";

interface Product {
    _id: string;
    name: string;
    imageUrl: string;
    price: number;
    stock: number;
}

const Product: React.FC<Product> = ({ _id, name, imageUrl, stock, price }) => {
    let stockMessage;
    let priceStyle;

    if (stock > 10) {
        stockMessage = <span className={styles.stock}>In Stock</span>;
        priceStyle = styles.inStock;
    } else if (stock > 0 && stock <= 10) {
        stockMessage = <span className={styles.stock}>Low Stock</span>;
        priceStyle = styles.lowStock;
    } else {
        stockMessage = <span className={styles.stock}>Out of Stock</span>;
        priceStyle = styles.outOfStock;
    }

    return (
        <div key={_id} className={styles.productCard}>
            <img className={styles.productImage} src={imageUrl} alt={name} />
            <p className={styles.productName}>{name}</p>
            <h4 className={styles.productPrice}>${price.toFixed(2)}</h4>
            <p>
                {stockMessage}: <span className={priceStyle}>{stock}</span>
            </p>
        </div>
    );
};

export default Product;
