import { useState, useEffect } from "react";
import Product from "../Product/Product";
import styles from "./Products.module.css";
import { API_BASE_URL } from "../../.config";
import { IProduct } from "../../interfaces/Product";
import CircularProgress from "@mui/material/CircularProgress";
function Products() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/furniture`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(`There was an error fetching the products: ${err instanceof Error ? err.message : String(err)}`);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (isLoading) return <CircularProgress />;
    if (error) return <div>Error: {error}</div>;

    return (
        <main className={styles.productsList}>
            {products.map((item) => (
                <Product key={item._id} {...item} />
            ))}
        </main>
    );
}

export default Products;
