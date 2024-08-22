import { useState, useEffect } from "react";
import Product from "../Product/Product";
import styles from "./Products.module.css";

interface ProductData {
    _id: string;
    name: string;
    imageUrl: string;
    price: number;
}

function Products() {
    const [products, setProducts] = useState<ProductData[]>([]);

    useEffect(() => {
        fetch("http://localhost:4500/api/furniture")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(`There is an error with fetching data: ${err}`));
    }, []);

    return (
        <main className={styles.productsList}>
            {products.map((item) => (
                <Product key={item._id} _id={item._id} name={item.name} imageUrl={item.imageUrl} price={item.price} />
            ))}
        </main>
    );
}

export default Products;
