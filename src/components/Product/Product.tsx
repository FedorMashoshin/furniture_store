import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Divider from "@mui/material/Divider";
import GradeIcon from "@mui/icons-material/Grade";
import Box from "@mui/material/Box";
import { IProduct } from "../../interfaces/Product";
import ProductModal from "../ProductModal/ProductModal";

const Product = (props: IProduct) => {
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
        <>
            <Card key={props._id} sx={{ width: 360, textAlign: "center", margin: 2 }}>
                <CardActionArea onClick={handleOpen}>
                    <CardMedia component="img" image={props.imageUrl} alt={props.name} sx={{ scale: 0.7 }} />
                    <Divider>
                        <Typography variant="h5" sx={{ fontWeight: 100 }}>
                            {props.name}
                        </Typography>
                    </Divider>
                    <CardContent>
                        <Typography sx={{ margin: 1.5 }} variant="h4" color="text.primary">
                            ${props.price.toFixed(2)}
                        </Typography>
                        <Typography sx={{ fontWeight: 100 }} variant="h6" color="text.secondary">
                            {stockMessage}:{" "}
                            <Typography sx={{ fontSize: "20px" }} component="span" color={stockColor}>
                                {props.stock}
                            </Typography>
                        </Typography>
                        <Box sx={{ display: "flex", mt: 2, alignItems: "center", justifyContent: "center" }}>
                            <GradeIcon sx={{ color: "orange", mr: 1, scale: 1.2 }} />
                            <Typography variant="h6">
                                {props.ratings.average} ({props.ratings.reviews})
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>

            <ProductModal open={open} onClose={handleClose} product={props} />
        </>
    );
};

export default Product;
