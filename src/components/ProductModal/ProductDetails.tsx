import React from "react";
import { Grid, Typography } from "@mui/material";
import { IProduct } from "../../interfaces/Product";

export const ProductDetails: React.FC<{ product: IProduct }> = ({ product }) => (
    <Grid container spacing={1}>
        {[
            { label: "Category", value: product.category },
            { label: "Dimensions", value: `${product.dimensions.depth} x ${product.dimensions.width} x ${product.dimensions.height}` },
            { label: "Weight", value: `${product.weight} lbs` },
            { label: "Color", value: product.color },
            { label: "Material", value: product.material },
            { label: "Brand", value: product.brand },
        ].map((detail, index) => (
            <Grid item xs={6} key={index}>
                <Typography variant="body2" color="text.secondary">
                    <strong>{detail.label}:</strong> {detail.value}
                </Typography>
            </Grid>
        ))}
    </Grid>
);
