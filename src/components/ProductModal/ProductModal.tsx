import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IProduct } from "../../interfaces/Product";

interface ProductModalProps {
    open: boolean;
    onClose: () => void;
    product: IProduct;
}

const ProductModal: React.FC<ProductModalProps> = ({ open, onClose, product }) => {
    return (
        <Modal open={open} onClose={onClose} aria-labelledby="product-modal-title" aria-describedby="product-modal-description">
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography id="product-modal-title" variant="h6" component="h2">
                    {product.name}
                </Typography>
                <Typography id="product-modal-description" sx={{ mt: 2 }}>
                    Price: ${product.price.toFixed(2)}
                    <br />
                    aStock: {product.stock}
                    <br />
                    Rating: {product.ratings.average} ({product.ratings.reviews} reviews)
                    <br />
                </Typography>
            </Box>
        </Modal>
    );
};

export default ProductModal;
