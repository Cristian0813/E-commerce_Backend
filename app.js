const express = require('express');
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Configuración de CORS
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
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

// Routes
const ApiRoutes = require('./routes/index');
app.use('/ApiRouter', ApiRoutes);
console.log('Middleware de enrutamiento aplicado para /ApiRouter');

// Production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log('Ruta no encontrada:', req.url);
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  console.error('Error detectado:', err.stack);

  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.title = 'Error';

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;