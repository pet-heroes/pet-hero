// Global modules/packages
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const { resolve } = require('path');

// Local modules
const { ENV } = require('./config');
const routes = require('./routes');

/**
 * Create the Express server
 */

const app = express();

/**
 * Pre-Route Middlewares
 */

app.use(helmet());
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Access, Authorization');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
    return res.status(200).end();
  }

  return next();
});

if (ENV !== 'production' && ENV !== 'testing') {
  app.use(logger('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use Express static to serve static files from the client/public directory
app.use(express.static(resolve(__dirname, 'client', 'public'), { extensions: ['html', 'htm'] }));

/**
 * Application Routes
 */

app.use(routes);

/**
 * Post-route Middlewares
 */

// TODO: Implement error handling middleware
app.use((req, res, next) => next());

module.exports = app;
