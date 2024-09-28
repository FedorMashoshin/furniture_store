import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IProduct } from "../../interfaces/Product";
import { Divider, ImageList, ImageListItem, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";

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
                        <ImageList sx={{ width: "100%", height: 400 }} cols={1} rowHeight={400}>
                            {[product.imageUrl2, product.imageUrl].map((url, index) => (
                                <ImageListItem key={index}>
                                    <img src={url} alt={`${product.name} - Image ${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                    <Grid item xs={12} md={6}>
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
                        <Typography variant="subtitle1" gutterBottom></Typography>
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
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default ProductModal;
