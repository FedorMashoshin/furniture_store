import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { IProduct } from "../../interfaces/Product";
import ProductModal from "../ProductModal/ProductModal";

interface ProductProps extends IProduct {
    onTagClick: (tag: string) => void;
}

const Product = (props: ProductProps) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let stockMessage;
    let stockColor;

    if (props.stock > 10) {
        stockMessage = <span>In Stock</span>;
        stockColor = "green";
    } else if (props.stock > 0 && props.stock <= 10) {
        stockMessage = <span>Low Stock</span>;
        stockColor = "orange";
    } else {
        stockMessage = <span>Out of stock</span>;
        stockColor = "red";
    }

    return (
        <Card
            key={props._id}
            sx={{
                width: 360,
                textAlign: "center",
                margin: 2,
                borderRadius: 5,
                backgroundColor: "white",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                },
            }}
        >
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, p: 1.5 }}>
                {props.tags &&
                    props.tags.map((tag, index) => (
                        <Chip
                            key={index}
                            label={tag}
                            size="small"
                            onClick={(e) => {
                                e.stopPropagation();
                                props.onTagClick(tag);
                            }}
                            sx={{
                                borderRadius: "12px",
                                fontWeight: 400,
                                backgroundColor: "rgba(0,0,0,0.05)",
                                "&:hover": {
                                    backgroundColor: "rgba(0,0,0,0.08)",
                                },
                            }}
                        />
                    ))}
            </Box>
            <CardActionArea onClick={handleOpen}>
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
            <ProductModal open={open} onClose={handleClose} product={props} />
        </Card>
    );
};

export default Product;
