const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Sample product data
const products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Smartphone' },
    { id: 3, name: 'Tablet' }
];

// Health check endpoint
app.get('/health', (req, res) => {
    res.send('OK');
});

// Products endpoint
app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

