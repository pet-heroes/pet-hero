const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const path = require('path');

const app = express();

app.use(helmet());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Access, Authorization',
  );

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
    return res.status(200).end();
  }

  return next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'client', 'public')));

// TODO: Extend Routes
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

module.exports = app;
