// Global modules/packages
const Router = require('express').Router();

/**
 * API Routes
 */

Router.use('/', (req, res) => {
  res.json({
    message: 'Welcome to the Pet Hero API! Goodness coming soon...',
  });
});

module.exports = Router;
