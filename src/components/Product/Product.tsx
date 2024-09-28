import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, CardActionArea, Divider, Box, Chip } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import { IProduct } from "../../interfaces/Product";
import ProductModal from "../ProductModal/ProductModal";
import { getStockInfo, cardStyles, chipStyles } from "./ProductStyles";

interface ProductProps extends IProduct {
    onTagClick: (tag: string) => void;
}

const Product: React.FC<ProductProps> = (props) => {
    const [open, setOpen] = useState(false);
    const { stockMessage, stockColor } = getStockInfo(props.stock);

    return (
        <Card key={props._id} sx={cardStyles}>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, p: 1.5 }}>
                {props.tags?.map((tag, index) => (
                    <Chip
                        key={index}
                        label={tag}
                        size="small"
                        onClick={(e) => {
                            e.stopPropagation();
                            props.onTagClick(tag);
                        }}
                        sx={chipStyles}
                    />
                ))}
            </Box>
            <CardActionArea onClick={() => setOpen(true)}>
                <CardMedia
                    component="img"
                    image={props.imageUrl}
                    alt={props.name}
                    sx={{
                        height: 240,
                        objectFit: "contain",
                        padding: 2,
                        backgroundColor: "white",
                    }}
                />
                <CardContent>
                    <Divider sx={{ mb: 1.5 }}>
                        <Typography variant="h6" sx={{ fontWeight: 500 }}>
                            {props.name}
                        </Typography>
                    </Divider>
                    <Typography variant="h5" color="primary" sx={{ fontWeight: 600, mb: 1.5 }}>
                        ${props.price.toFixed(2)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                        {stockMessage}:{" "}
                        <Typography component="span" color={stockColor} sx={{ fontWeight: 500 }}>
                            {props.stock}
                        </Typography>
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <GradeIcon sx={{ color: "orange", mr: 0.5, fontSize: "1rem" }} />
                        <Typography variant="body2" sx={{ fontWeight: 400 }}>
                            {props.ratings.average} ({props.ratings.reviews})
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
            <ProductModal open={open} onClose={() => setOpen(false)} product={props} />
        </Card>
    );
};

export default Product;
