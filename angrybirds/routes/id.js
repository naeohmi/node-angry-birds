require('dotenv').config();
const express = require('express');
var birds = require('../data/birds');

const app = express();

// request id middleware
const requestId = (req, res, next) => {
  const requestId = birds;
  req.id = requestId;
  res.id = requestId;

  // pass continuation to next middleware
  next();
};

app.use(requestId);

app.get('/angry-birds:id', (req, res, next) => {
  res.send('id');
});


module.exports = app;