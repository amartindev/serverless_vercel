const express = require('express');
const app = express();

// Middleware para leer el cuerpo de las solicitudes como JSON
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

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
