const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();

// Enable CORS for all origins
app.use(cors());

// Middleware to parse the request body as JSON
app.use(express.json());

// GET request route
app.get('/test', (req, res) => {
  res.json({ message: 'GET request received successfully' });
});

// POST request route
app.post('/test', (req, res) => {
  const { data } = req.body;
  res.json({ message: 'POST request received successfully', data });
});

// PUT request route
app.put('/test', (req, res) => {
  const { data } = req.body;
  res.json({ message: 'PUT request received successfully', data });
});

// DELETE request route
app.delete('/test', (req, res) => {
  res.json({ message: 'DELETE request received successfully' });
});

// Export the app as a module for Vercel
module.exports = app;
