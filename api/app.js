const express = require('express');
// import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send('The API is working'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});