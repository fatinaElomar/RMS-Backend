const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Import dotenv for environment variables

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// MongoDB cluster connection with Mongoose
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
  .then(() => console.log('MongoDB cluster connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
