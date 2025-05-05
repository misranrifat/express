/**
 * Error handling middleware
 */
const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    // Log error for debugging
    console.error(`Error: ${err.message}`);
    if (process.env.NODE_ENV === 'development') {
        console.error(err.stack);
    }

    // Send error response
    res.status(statusCode).json({
        status: 'error',
        message: err.message || 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
};

module.exports = errorHandler; 