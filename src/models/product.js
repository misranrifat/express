const { v4: uuidv4 } = require('uuid');

// In-memory database
let products = [
    {
        id: '1',
        name: 'Laptop',
        description: 'High performance laptop',
        price: 999.99,
        category: 'Electronics',
        createdAt: new Date().toISOString()
    },
    {
        id: '2',
        name: 'Smartphone',
        description: 'Latest model smartphone',
        price: 799.99,
        category: 'Electronics',
        createdAt: new Date().toISOString()
    },
    {
        id: '3',
        name: 'Headphones',
        description: 'Noise cancelling headphones',
        price: 199.99,
        category: 'Accessories',
        createdAt: new Date().toISOString()
    }
];

class Product {
    static findAll() {
        return products;
    }

    static findById(id) {
        return products.find(product => product.id === id);
    }

    static create(data) {
        const newProduct = {
            id: uuidv4(),
            ...data,
            createdAt: new Date().toISOString()
        };
        products.push(newProduct);
        return newProduct;
    }

    static update(id, data) {
        const index = products.findIndex(product => product.id === id);
        if (index === -1) return null;

        const updatedProduct = {
            ...products[index],
            ...data,
            id, // Ensure id doesn't change
            updatedAt: new Date().toISOString()
        };

        products[index] = updatedProduct;
        return updatedProduct;
    }

    static delete(id) {
        const index = products.findIndex(product => product.id === id);
        if (index === -1) return false;

        products.splice(index, 1);
        return true;
    }

    static deleteAll() {    
        products = [];
        return true;
    }
}

module.exports = Product; 