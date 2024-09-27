import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Container, Box } from "@mui/material";

const MainPage: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundImage:
                    'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F2076125.jpg&f=1&nofb=1&ipt=ef39de58f0a9fb74422c128c32c979ec14e74a90d5d8688777c3986c7b7fe4f5&ipo=images")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Container maxWidth="xl">
                <Box sx={{ textAlign: "center", color: "white" }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontWeight: 100,
                            letterSpacing: 2,
                            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                            mb: 3,
                        }}
                    >
                        Welcome to Our Furniture Store
                    </Typography>
                    <Typography
                        variant="h5"
                        component="h2"
                        gutterBottom
                        sx={{
                            fontWeight: 100,
                            letterSpacing: 1,
                            textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                            mb: 4,
                        }}
                    >
                        Discover our wide range of high-quality furniture
                    </Typography>
                    <Button
                        component={Link}
                        to="/products"
                        variant="contained"
                        color="warning"
                        size="large"
                        sx={{
                            mt: 2,
                            px: 4,
                            py: 1.5,
                            fontSize: "1.1rem",
                            fontWeight: 100,
                            letterSpacing: 1,
                            borderRadius: 2,
                            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-2px)",
                                boxShadow: "0 6px 8px rgba(0,0,0,0.2)",
                            },
                        }}
                    >
                        Browse Products
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default MainPage;
