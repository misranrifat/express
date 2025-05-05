/**
 * Product validation middleware
 */

// Validate product on create
exports.validateNewProduct = (req, res, next) => {
    const { name, price, description, category } = req.body;
    const errors = [];

    // Required fields
    if (!name || name.trim() === '') {
        errors.push('Name is required');
    }

    if (price === undefined || price === null) {
        errors.push('Price is required');
    } else if (isNaN(Number(price)) || Number(price) < 0) {
        errors.push('Price must be a positive number');
    }

    // Optional fields validation
    if (description !== undefined && typeof description !== 'string') {
        errors.push('Description must be a string');
    }

    if (category !== undefined && typeof category !== 'string') {
        errors.push('Category must be a string');
    }

    // Return errors if any
    if (errors.length > 0) {
        return res.status(400).json({
            status: 'error',
            errors
        });
    }

    next();
};

// Validate product on update (allows partial updates)
exports.validateUpdateProduct = (req, res, next) => {
    const { name, price, description, category } = req.body;
    const errors = [];

    // All fields are optional for update, but validate if provided
    if (name !== undefined && (name === null || name.trim() === '')) {
        errors.push('Name cannot be empty if provided');
    }

    if (price !== undefined && (isNaN(Number(price)) || Number(price) < 0)) {
        errors.push('Price must be a positive number');
    }

    if (description !== undefined && typeof description !== 'string') {
        errors.push('Description must be a string');
    }

    if (category !== undefined && typeof category !== 'string') {
        errors.push('Category must be a string');
    }

    // Return errors if any
    if (errors.length > 0) {
        return res.status(400).json({
            status: 'error',
            errors
        });
    }

    next();
}; 