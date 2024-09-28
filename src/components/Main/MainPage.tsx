import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Container, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./MainPage.module.css";

const MainPage: React.FC = () => {
    console.log(styles);
    return (
        <Box className={styles.mainContainer}>
            <Container maxWidth="xl">
                <Box className={styles.mainWrapperHeader}>
                    <Typography sx={{ fontFamily: "Sacramento, cursive", fontSize: "8rem" }}>Mashoshin's Furniture</Typography>
                    <Typography sx={{ fontFamily: "Poppins, sans-serif", fontSize: "1.5rem", fontWeight: "100" }}>Discover our wide range of high-quality furniture</Typography>
                    <Button
                        component={Link}
                        to="/products"
                        variant="contained"
                        size="large"
                        aria-label="Browse Products"
                        sx={{
                            mt: 2,
                            borderRadius: "50%",
                            width: 80,
                            height: 80,
                            backgroundColor: "#FFD700",
                            "&:hover": {
                                backgroundColor: "#FFC000",
                                transform: "scale(1.1)",
                            },
                            transition: "all 0.3s ease-in-out",
                            boxShadow: "0 4px 20px rgba(255, 215, 0, 0.3)",
                        }}
                    >
                        <ArrowForwardIcon sx={{ fontSize: 40, color: "#000000" }} />
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default MainPage;
