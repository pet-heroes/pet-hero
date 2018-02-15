// Global modules/packages
const http = require('http');

// Local modules
const app = require('./app');
const { HOST, PORT } = require('./config');

// Initialize the NODE JS server and begin listening for traffic
http.createServer(app).listen(PORT, HOST, () => {
  console.log(`Pet Hero is running on http://${HOST}:${PORT}`);
});
