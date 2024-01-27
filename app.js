const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const express = require('express');
const app = express();
const cors = require('cors');

// Environment variables configuration
require('dotenv').config();

// VIEW ENGINE SETUP
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Configuración de CORS
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

console.log('Configuración de CORS aplicada');

app.use(logger('dev'));
console.log('Middleware de registro (logger) aplicado');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

console.log('Middlewares generales aplicados');

// ROUTES
const ApiRoutes = require('./routes/index');
app.use('/ApiRouter', ApiRoutes);
console.log('Middleware de enrutamiento aplicado para /ApiRouter');

// CATCH 404 AND FORWARD TO ERROR HANDLER
app.use(function (req, res, next) {
  console.log('Ruta no encontrada:', req.url);
  next(createError(404));
});

// ERROR HANDLER
app.use(function (err, req, res, next) {
  console.error('Error detectado:', err.stack);

  // SET LOCALS, ONLY PROVIDING ERROR IN DEVELOPMENT
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.title = 'Error';

  // RENDER THE ERROR PAGE
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;