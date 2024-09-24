// @ts-nocheck
// @ts-nocheck
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 9000;
const mongoURI = "mongodb+srv://fmashoshin:JtmDkoWiGcDk5pyY@mashoshin.jglfepn.mongodb.net/furniture_store?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a schema and model for Furniture, using the 'Products' collection
const furnitureSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },


    price: { type: Number, required: true },
    category: { type: String, required: true },
    dimensions: {
        width: { type: Number, required: true },
        height: { type: Number, required: true },
        depth: { type: Number, required: true }
    },
    weight: { type: Number, required: true },
    color: { type: String, required: true },
    material: { type: String, required: true },
    brand: { type: String, required: true },
    stock: { type: Number, default: 0 },
    imageUrl: { type: String },
    imageUrl2: { type: String },
    ratings: {
        average: { type: Number, default: 0 },
        reviews: { type: Number, default: 0 }
    },
    tags: { type: [String], default: [] }
}, { collection: 'Products' }); // Specify the collection name here

const Furniture = mongoose.model('Furniture', furnitureSchema);

// Gracefully close connection on server shutdown
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
    process.exit(0);
});

app.use(cors());
app.use(express.json());

// Route to get all furniture items
app.get('/api/furniture', async (req, res) => {
    try {
        const furnitureItems = await Furniture.find();
        res.json(furnitureItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
