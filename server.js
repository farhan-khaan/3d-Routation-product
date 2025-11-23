require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

// Mock Data (Fallback)
const mockProducts = [
    {
        _id: '1',
        name: 'Quantum Cube',
        description: 'A hyper-dimensional storage unit for all your digital needs.',
        price: 299.99,
        specs: ['10TB Storage', 'Quantum Encryption', 'Zero Latency'],
        reviews: [{ user: 'Alice', rating: 5, comment: 'Amazing tech!' }],
        shapeType: 'cube',
        color: '#00ff88'
    },
    {
        _id: '2',
        name: 'Nebula Sphere',
        description: 'Experience 360-degree surround sound in a perfect orb.',
        price: 149.50,
        specs: ['360 Audio', 'Bluetooth 5.2', 'Waterproof'],
        reviews: [{ user: 'Bob', rating: 4, comment: 'Great sound, rolls away easily though.' }],
        shapeType: 'sphere',
        color: '#ff0055'
    },
    {
        _id: '3',
        name: 'Torus Ring',
        description: 'Smart wearable that tracks your health and bends time.',
        price: 499.00,
        specs: ['Health Tracking', 'Time Bending', 'Infinite Battery'],
        reviews: [{ user: 'Charlie', rating: 5, comment: 'Timeless.' }],
        shapeType: 'torus',
        color: '#6600ff'
    }
];

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
const Product = require('./models/Product');

app.get('/', async (req, res) => {
    try {
        let products;
        if (process.env.USE_MOCK_DB === 'true') {
            products = mockProducts;
        } else {
            products = await Product.find();
        }
        res.render('index', { products });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.get('/product/:id', async (req, res) => {
    try {
        let product;
        if (process.env.USE_MOCK_DB === 'true') {
            product = mockProducts.find(p => p._id === req.params.id);
        } else {
            product = await Product.findById(req.params.id);
        }

        if (!product) return res.status(404).send('Product not found');
        res.render('product', { product });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
