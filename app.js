const express = require('express');

const app = express();
app.use(express.json());
const routes = require('./api');
routes(app);
module.exports = app;
