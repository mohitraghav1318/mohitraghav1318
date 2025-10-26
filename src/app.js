const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const logger = require('./middleware/logger');

const app = express();

// Middleware
app.use(logger);
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use routes
app.use('/', indexRouter);

module.exports = app;

