const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create the app
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simple Route to test the server
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
