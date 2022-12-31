const express = require('express');
const morgan = require('morgan');

const app = express();

// environment variables
app.set('PORT', process.env.PORT || 4000)

app.use(morgan('dev'));

// routes
app.use('/rest', require('./routes/employees.routes'));


module.exports = app;
