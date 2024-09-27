import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Header: React.FC = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: "#333" }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#fff" }}>
                    Furniture Store
                </Typography>
                <Button color="inherit" component={Link} to="/products" sx={{ color: "#fff" }}>
                    Products
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
