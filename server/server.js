// @ts-nocheck
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4500;

app.use(cors());
app.use(express.json());

const furnitureData = [
    { id: 1, name: 'Modern Chair', price: 89.99, description: 'A sleek and stylish modern chair.' },
    { id: 2, name: 'Classic Table', price: 199.99, description: 'A classic wooden table with a vintage design.' },
    { id: 3, name: 'Comfort Sofa', price: 499.99, description: 'A comfortable sofa perfect for lounging.' }
];

app.get('/api/furniture', (req, res) => {
    res.json(furnitureData);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
