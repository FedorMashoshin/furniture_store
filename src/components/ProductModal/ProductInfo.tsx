import React from "react";
import { Typography, Divider, Box, Rating, Chip } from "@mui/material";
import { IProduct } from "../../interfaces/Product";

export const ProductInfo: React.FC<{ product: IProduct }> = ({ product }) => (
    <>
        <Divider>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 100 }}>
                {product.name}
            </Typography>
        </Divider>
        <Typography variant="body1" sx={{ fontWeight: 100, textAlign: "justify" }} paragraph>
            {product.description}
        </Typography>
        <Typography variant="h5" color="primary" gutterBottom>
            ${product.price.toFixed(2)}
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
            <Rating value={product.ratings.average} readOnly precision={0.5} />
            <Typography variant="body2" ml={1}>
                ({product.ratings.reviews} reviews)
            </Typography>
        </Box>
        <Chip label={`Stock: ${product.stock}`} color={product.stock > 10 ? "success" : product.stock > 0 ? "warning" : "error"} sx={{ mb: 2 }} />
    </>
);
