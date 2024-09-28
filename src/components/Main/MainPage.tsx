import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Container, Box } from "@mui/material";
import styles from "./MainPage.module.css";
const MainPage: React.FC = () => {
    return (
        <Box className={styles.mainContainer}>
            <Container maxWidth="xl">
                <Box className={styles.mainWrapperHeader}>
                    <Typography variant="h2" component="h1" gutterBottom className={styles.mainHeader}>
                        Mashoshin's Furniture
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom className={styles.mainSubHeader}>
                        Discover our wide range of high-quality furniture
                    </Typography>
                    <Button component={Link} to="/products" variant="contained" size="large" className={styles.mainButton}>
                        Browse Products
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default MainPage;
