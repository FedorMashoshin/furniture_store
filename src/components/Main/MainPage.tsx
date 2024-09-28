import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Container, Box } from "@mui/material";

const MainPage: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundImage:
                    'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F57%2F7f%2F25%2F577f251e53663fe1029614fb08ac7152.jpg&f=1&nofb=1&ipt=b0f5a4f2cabbdadb12c8ea620f5fbf98c1e4ff98128c50947993c08bf201cd0c&ipo=images")', // Updated this line
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
                            fontFamily: "'Sacramento', cursive",
                            fontWeight: 100,
                            letterSpacing: 2,
                            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                            mb: 3,
                            fontSize: "8rem",
                        }}
                    >
                        Mashoshin's Furniture
                    </Typography>
                    <Typography
                        variant="h5"
                        component="h2"
                        gutterBottom
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
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
                        size="large"
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            mt: 2,
                            px: 4,
                            py: 1.5,
                            fontSize: "1.1rem",
                            fontWeight: 100,
                            letterSpacing: 1,
                            borderRadius: 50,
                            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                            border: 0,
                            color: "white",
                            boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                            transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
                            position: "relative",
                            overflow: "hidden",
                            "&:hover": {
                                boxShadow: "0 6px 10px 4px rgba(255, 105, 135, .4)",
                                transform: "translateY(-3px)",
                            },
                            "&:active": {
                                boxShadow: "0 1px 3px 1px rgba(255, 105, 135, .3)",
                                transform: "translateY(1px)",
                            },
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: "-100%",
                                width: "100%",
                                height: "100%",
                                background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent)",
                                transition: "all 0.6s",
                            },
                            "&:hover::before": {
                                left: "100%",
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
