import { useState, useEffect } from "react";
import Product from "../Product/Product";
import styles from "./Products.module.css";
import { IProduct } from "../../interfaces/Product";

function Products() {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        fetch("http://localhost:4500/api/furniture")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(`There is an error with fetching data: ${err}`));
    }, []);

    return (
        <main className={styles.productsList}>
            {products.map((item) => (
                <Product key={item._id} _id={item._id} name={item.name} imageUrl={item.imageUrl} stock={item.stock} price={item.price} ratings={item.ratings} />
            ))}
        </main>
    );
}

export default Products;
