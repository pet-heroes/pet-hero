// Global modules/packages
const Router = require('express').Router();

// Local modules
const apiRoutes = require('./apiRoutes');

/**
 * Application Routes
 * TODO: Replace with a universal match to serve React application
 */

Router.get('/', (req, res) => {
  res.sendFile('index');
});

/**
 * API Routes
 */

Router.use('/api', apiRoutes);

module.exports = Router;
