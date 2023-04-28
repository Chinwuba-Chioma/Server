const express = require('express');
const app = express();

const auth = require('./auth.route');
const user = require('./user.route');

app.use('/auth', auth);
app.use('/user', user);

module.exports = app;