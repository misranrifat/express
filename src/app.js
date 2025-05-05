const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import routes
const productsRoutes = require('./routes/products');

// Create Express app
const app = express();

// Add middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // Logging
app.use(express.json()); // Parse JSON bodies

// API routes
app.use('/api/products', productsRoutes);

// Root route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the RESTful API',
        endpoints: {
            products: '/api/products'
        }
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({
        error: err.message || 'Internal Server Error'
    });
});

module.exports = app; 