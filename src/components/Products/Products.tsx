import { useState, useEffect, useRef } from "react";
import Product from "../Product/Product";
import styles from "./Products.module.css";
import { API_BASE_URL } from "../../.config";
import { IProduct } from "../../interfaces/Product";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// Add these imports
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import Header from "../Header/Header";

function Products() {
    const [searchTerm, setSearchTerm] = useState("");
    const searchInputRef = useRef<HTMLInputElement>(null);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
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

    const handleTagClick = (tag: string) => {
        setSearchTerm(tag);
        searchInputRef.current?.focus();
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: "#333",
            },
        },
    });

    const filteredProducts = products.filter((product) => {
        const productTags = product.tags || [];
        const productName = product.name.toLowerCase();
        return productName.includes(searchTerm.toLowerCase()) || productTags.includes(searchTerm.toLowerCase());
    });

    if (isLoading) return <CircularProgress />;
    if (error) return <div>Error: {error}</div>;

    // Add this function to clear the search input
    const handleClearSearch = () => {
        setSearchTerm("");
        searchInputRef.current?.focus();
    };

    return (
        <>
            <Header />
            <ThemeProvider theme={theme}>
                <TextField
                    id="outlined-basic"
                    label="Search"
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearch}
                    margin="normal"
                    sx={{ width: "30%", backgroundColor: "white" }}
                    inputRef={searchInputRef}
                    // Add InputAdornment with clear button
                    InputProps={{
                        endAdornment: searchTerm && (
                            <InputAdornment position="end">
                                <IconButton aria-label="clear search" onClick={handleClearSearch} edge="end">
                                    <ClearIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <main className={styles.productsList}>
                    {filteredProducts.map((item) => (
                        <Product key={item._id} {...item} onTagClick={handleTagClick} />
                    ))}
                </main>
            </ThemeProvider>
        </>
    );
}

export default Products;
