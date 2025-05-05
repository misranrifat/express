const Product = require('../models/product');

// Get all products
exports.getAllProducts = (req, res) => {
    const products = Product.findAll();
    res.json(products);
};

// Get a single product by ID
exports.getProductById = (req, res) => {
    const { id } = req.params;
    const product = Product.findById(id);

    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
};

// Create a new product
exports.createProduct = (req, res) => {
    const { name, description, price, category } = req.body;

    // Basic validation
    if (!name || !price) {
        return res.status(400).json({ error: 'Name and price are required' });
    }

    const newProduct = Product.create({
        name,
        description,
        price: Number(price),
        category
    });

    res.status(201).json(newProduct);
};

// Update a product
exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, description, price, category } = req.body;

    const updatedProduct = Product.update(id, {
        name,
        description,
        price: price ? Number(price) : undefined,
        category
    });

    if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
    }

    res.json(updatedProduct);
};

// Delete a product
exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    const deleted = Product.delete(id);

    if (!deleted) {
        return res.status(404).json({ error: 'Product not found' });
    }

    res.status(204).end();
};

// Delete all products
exports.deleteAllProducts = (req, res) => {
    Product.deleteAll();
    res.status(204).end();
};