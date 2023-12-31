const createError = require ('http-errors');
const path = require ('path');
const cookieParser = require ('cookie-parser');
const logger = require ('morgan');

const express = require ('express');
const app = express ();
const cors = require('cors');

// Environment variables configuration
require ('dotenv').config();

// VIEW ENGINE SETUP
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
const ApiRoutes = require ('./routes/index');
app.use('/', ApiRoutes);

// CATCH 404 AND FORWARD TO ERROR HANDLER
app.use(function (req, res, next) {
  next(createError(404));
});

// ERROR HANDLER
app.use(function (err, req, res, next) {
  console.error(err.stack);

  // SET LOCALS, ONLY PROVIDING ERROR IN DEVELOPMENT
  res.locals.message = err.message;
  res.locals.error = req.app.get ('env') === 'development' ? err : {};

  // RENDER THE ERROR PAGE
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;