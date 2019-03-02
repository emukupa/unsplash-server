const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./api');

// instantiate
const app = express();

// add middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

// bring in the routes
routes(app);

// export
module.exports = app;
