// @ts-nocheck
// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 4500;

// Dummy data
const furnitureData = [
    {
        id: 1,
        name: 'Modern Chair',
        price: 89.99,
        description: 'A sleek and stylish modern chair.'
    },
    {
        id: 2,
        name: 'Classic Table',
        price: 199.99,
        description: 'A classic wooden table with a vintage design.'
    },
    {
        id: 3,
        name: 'Comfort Sofa',
        price: 499.99,
        description: 'A comfortable sofa perfect for lounging.'
    }
];

// Middleware
app.use(express.json());

// Route to get all furniture
app.get('/api/furniture', (req, res) => {
    res.json(furnitureData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
