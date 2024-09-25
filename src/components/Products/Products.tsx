import { useState, useEffect } from "react";
import Product from "../Product/Product";
import styles from "./Products.module.css";
import { API_BASE_URL } from "../../.config";
import { IProduct } from "../../interfaces/Product";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function Products() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        console.log(searchTerm);
    };
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

    const theme = createTheme({
        palette: {
            primary: {
                main: "#333",
            },
        },
    });

    if (isLoading) return <CircularProgress />;
    if (error) return <div>Error: {error}</div>;

    return (
        <ThemeProvider theme={theme}>
            <TextField id="outlined-basic" label="Search" variant="outlined" value={searchTerm} onChange={handleSearch} margin="normal" sx={{ width: "30%" }} />
            <main className={styles.productsList}>
                {products.map((item) => (
                    <Product key={item._id} {...item} />
                ))}
            </main>
        </ThemeProvider>
    );
}

export default Products;
