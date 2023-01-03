const express = require('express');
const morgan = require('morgan');

const app = express();

// Configurar Headers y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// environment variables
app.set('PORT', process.env.PORT || 4000)

app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/rest', require('./routes/employees.routes'));


module.exports = app;