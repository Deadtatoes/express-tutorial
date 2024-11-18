const express = require('express');
const app = express();

// Middleware configuration
const logger = require('./logger');
const authorize = require('./authorize');

// Test
// app.use([logger, authorize]);


app.use(express.static('./public'))


app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('Produycts');
});

app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items');
});

// Listening
const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
  console.log('Server is running on port 5000...');
});
