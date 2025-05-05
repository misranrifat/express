# Express RESTful API

A RESTful API built with Express.js demonstrating CRUD operations with an in-memory database.

## Project Structure

```
express-restful/
│
├── node_modules/        # Dependencies
├── src/                 # Source files
│   ├── config/          # Configuration files
│   ├── controllers/     # Route controllers
│   │   └── products.js  # Products controller with CRUD operations
│   ├── middleware/      # Middleware functions
│   │   ├── errorHandler.js  # Error handling middleware
│   │   └── validator.js     # Request validation middleware
│   ├── models/          # Data models
│   │   └── product.js   # Product model with in-memory database
│   ├── routes/          # Route definitions
│   │   └── products.js  # Product routes
│   ├── app.js           # Express app setup
│   └── server.js        # Server entry point
│
├── .env.example         # Example environment variables
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```

## Features

- RESTful API endpoints for CRUD operations
- In-memory database for demo purposes
- Request validation
- Error handling middleware
- CORS enabled
- Security headers with Helmet

## API Endpoints

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a single product by ID
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product
- `DELETE /api/products` - Delete all products

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/express-restful.git
   cd express-restful
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file (see `.env.example` for reference)
   ```
   PORT=3000
   NODE_ENV=development
   ```

4. Start the development server
   ```
   npm run dev
   ```

5. For production
   ```
   npm start
   ```

## Example Requests

### Create a Product

```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Coffee Maker",
    "description": "Automatic drip coffee maker",
    "price": 49.99,
    "category": "Kitchen Appliances"
  }'
```

### Get All Products

```bash
curl http://localhost:3000/api/products
```

### Update a Product

```bash
curl -X PUT http://localhost:3000/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "price": 39.99,
    "description": "Updated description"
  }'
```

### Delete a Product

```bash
curl -X DELETE http://localhost:3000/api/products/1
```

### Delete all Products

```bash
curl -X DELETE http://localhost:3000/api/products
```