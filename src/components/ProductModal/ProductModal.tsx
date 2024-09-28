import React from "react";
import { Modal, Box, Grid } from "@mui/material";
import { IProduct } from "../../interfaces/Product";
import { ProductDetails } from "./ProductDetails.tsx";
import { ProductActions } from "./ProductActions.tsx";
import { ProductInfo } from "./ProductInfo.tsx";
import { ProductImages } from "./ProductImages.tsx";
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
                    width: 900,
                    maxHeight: "90vh",
                    bgcolor: "background.paper",
                    borderRadius: 5,
                    boxShadow: 24,
                    p: 4,
                    overflow: "auto",
                }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <ProductImages images={[product.imageUrl2, product.imageUrl]} productName={product.name} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ProductInfo product={product} />
                        <ProductDetails product={product} />
                        <ProductActions />
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default ProductModal;
