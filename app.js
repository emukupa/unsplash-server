const express = require('express');

const app = express();
const routes = require('./api');
routes(app);
module.exports = app;
