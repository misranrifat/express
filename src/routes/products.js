const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');
const { validateNewProduct, validateUpdateProduct } = require('../middleware/validator');

// GET all products
router.get('/', productsController.getAllProducts);

// GET a single product
router.get('/:id', productsController.getProductById);

// POST create a new product
router.post('/', validateNewProduct, productsController.createProduct);

// PUT update a product
router.put('/:id', validateUpdateProduct, productsController.updateProduct);

// DELETE a product
router.delete('/:id', productsController.deleteProduct);

// DELETE all products
router.delete('/', productsController.deleteAllProducts);

module.exports = router; 