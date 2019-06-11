import bodyParser from 'body-parser';
import mealRoutes from './Routes/meal.route';

// import express from 'express';
const express = require('express');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('The API is working'));

// Handle & Route Prefix
app.use('/api/v1/meals', mealRoutes); // All routes that start with '/api/v1/meals' should be handled by mealRoutes


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
