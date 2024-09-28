import React from "react";
import { Box, Button } from "@mui/material";

export const ProductActions: React.FC = () => (
    <Box mt={3} display="flex" justifyContent="flex-end">
        <Button
            variant="outlined"
            color="primary"
            onClick={() => {
                //TODO Implement add to cart functionality
                console.log("Add to Cart clicked");
            }}
            sx={{ mr: 2 }}
        >
            Add to Cart
        </Button>
        <Button
            variant="contained"
            color="primary"
            onClick={() => {
                //TODO Implement buy now functionality
                console.log("Buy Now clicked");
            }}
        >
            Buy Now
        </Button>
    </Box>
);
