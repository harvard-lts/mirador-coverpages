// Required Modules
const createError = require('http-errors');
const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');
const hbs = exphbs.create({extname: '.hbs'});
const helmet = require('helmet');
const { requestLogStream, console: consoleLogger, skipLogs } = require('./logger/logger.js');
const requestLogger = require('morgan');

// Application Routes
const coverpageRouter = require('./routes/api/coverpage');
const healthRouter  = require('./routes/api/healthcheck');
const pdfRouter  = require('./routes/api/pdf');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
// http://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', true);

/* Loggers */

// Request Logger
// Log API requests to console
app.use(requestLogger('dev', { skip: skipLogs }));
// Log API requests in the Apache combined format to one log file per day
app.use(requestLogger('combined', { stream: requestLogStream, flags: 'a', skip: skipLogs }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Automatically set default HTTP response headers
app.use(helmet());

app.use('/coverpage', coverpageRouter);
app.use('/healthcheck', healthRouter);
app.use('/pdf', pdfRouter);

// Error handler
app.use(function (err, req, res, next) {
  // Set locals
  res.locals.message = err.message;
  res.locals.error = err;
  // Log error to console
  consoleLogger.error(err);
  res.status(err.status || 500);
  // Render error stack in a JSON response
  res.json(err.stack);
});

module.exports = app;
