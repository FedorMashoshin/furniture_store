import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import GradeIcon from "@mui/icons-material/Grade";
import Box from "@mui/material/Box";

interface Rating {
    average: number;
    reviews: number;
}
interface Product {
    _id: string;
    name: string;
    imageUrl: string;
    price: number;
    stock: number;
    ratings: Rating;
}

const Product: React.FC<Product> = ({ _id, name, imageUrl, stock, price, ratings }) => {
    let stockMessage;
    let stockColor;

    if (stock > 10) {
        stockMessage = <span>In Stock</span>;
        stockColor = "green";
    } else if (stock > 0 && stock <= 10) {
        stockMessage = <span>Low Stock</span>;
        stockColor = "orange";
    } else {
        stockMessage = <span>Out of stock</span>;
        stockColor = "red";
    }

    return (
        <Card key={_id} sx={{ width: 360, textAlign: "center", margin: 2 }}>
            <CardActionArea>
                <CardMedia component="img" image={imageUrl} alt={name} sx={{ scale: 0.7 }} />
                <Divider>
                    <Typography variant="h5" sx={{ fontWeight: 100 }}>
                        {name}
                    </Typography>
                </Divider>
                <CardContent>
                    <Typography sx={{ margin: 1.5 }} variant="h4" color="text.primary">
                        ${price.toFixed(2)}
                    </Typography>
                    <Typography sx={{ fontWeight: 100 }} variant="h6" color="text.secondary">
                        {stockMessage}:{" "}
                        <Typography sx={{ fontSize: "20px" }} component="span" color={stockColor}>
                            {stock}
                        </Typography>
                    </Typography>
                    <Box sx={{ display: "flex", mt: 2, alignItems: "center", justifyContent: "center" }}>
                        <GradeIcon sx={{ color: "orange", mr: 1, scale: 1.2 }} />
                        <Typography variant="h6">
                            {ratings.average} ({ratings.reviews})
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Product;
