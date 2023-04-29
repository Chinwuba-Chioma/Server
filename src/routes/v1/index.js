const express = require('express');
const app = express();

const auth = require('./auth.route');
const users = require('./user.route');
// const projects = require('./project.route');
// const reviews = require('./review.route');
// const skills = require('./skill.route');
// const notifications = require('./notification.route');
// const earnings = require('./earning.route');
// const transactions = require('./transaction.route');

app.use('/auth', auth);
app.use('/users', users);
// app.use('/projects', projects);
// app.use('/reviews', reviews);
// app.use('/skills', skills);
// app.use('/notifications', notifications);
// app.use('/earnings', earnings);
// app.use('/transactions', transactions);

module.exports = app;