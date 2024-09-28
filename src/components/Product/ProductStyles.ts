import { SxProps } from "@mui/system";

export const getStockInfo = (stock: number) => {
    if (stock > 10) {
        return { stockMessage: "In Stock", stockColor: "green" };
    } else if (stock > 0 && stock <= 10) {
        return { stockMessage: "Low Stock", stockColor: "orange" };
    } else {
        return { stockMessage: "Out of stock", stockColor: "red" };
    }
};

export const cardStyles: SxProps = {
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
};

export const chipStyles: SxProps = {
    borderRadius: "12px",
    fontWeight: 400,
    backgroundColor: "rgba(0,0,0,0.05)",
    "&:hover": {
        backgroundColor: "rgba(0,0,0,0.08)",
    },
};
