// import express, mongoose, routes
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
// Port number
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Connect mongoose serer
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useNewUrlParser: true,
});

// sync to turn on server
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}!`);
});