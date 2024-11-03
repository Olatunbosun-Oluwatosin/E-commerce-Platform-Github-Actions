const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies and allow CORS
app.use(bodyParser.json());
app.use(cors());

// Root route
app.get('/', (req, res) => {
  res.send('E-Commerce API is running!');
});

// 1. Login Endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Dummy user data
  const dummyUser = {
    id: 1,
    email: 'techlab.activate@gmail.com',
    password: 'password123', // Never store plain-text passwords in production
    name: 'Tosin Tunbosun',
  };

  // Validate credentials
  if (email === dummyUser.email && password === dummyUser.password) {
    res.status(200).json({ user: { id: dummyUser.id, name: dummyUser.name, email: dummyUser.email } });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// 2. Products Endpoint
app.get('/api/products', (req, res) => {
  // Dummy product data
  const products = [
    { id: 1, name: 'laptop-bag', price: 10 },
    { id: 2, name: 'school-bag', price: 20 },
    { id: 3, name: 'lunch-box', price: 30 },
  ];

  // Return products
  res.status(200).json(products);
});

// 3. Order Placement Endpoint
app.post('/api/orders', (req, res) => {
  const { userId, products } = req.body;

  // Validate input
  if (!userId || !products || products.length === 0) {
    return res.status(400).json({ error: 'Invalid order data' });
  }

  // Process order (in production, this would save to a database)
  res.status(201).json({ message: 'Order placed successfully!', order: { userId, products } });
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = server;