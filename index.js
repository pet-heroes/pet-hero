const http = require('http');

const app = require('./app');

const PORT = process.env.PORT || 8080;

http.createServer(app).listen(PORT, () => {
  console.log(`Pet Hero is running on http://localhost:${PORT}`);
});
