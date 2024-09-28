import { ImageList, ImageListItem } from "@mui/material";

export const ProductImages: React.FC<{ images: string[]; productName: string }> = ({ images, productName }) => (
    <ImageList sx={{ width: "100%", height: 400 }} cols={1} rowHeight={400}>
        {images.map((url, index) => (
            <ImageListItem key={index}>
                <img src={url} alt={`${productName} - Image ${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </ImageListItem>
        ))}
    </ImageList>
);
