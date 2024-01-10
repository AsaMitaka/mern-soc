const express = require('express');
const route = express.Router();
const authRoute = require('../routes/auth.route');
// const commentRoute = require('../routes/comment.route');
const postRoute = require('../routes/post.route');
const userRoute = require('../routes/user.route');

route.use('/', postRoute);
// route.use('/', commentRoute);
route.use('/', authRoute);
route.use('/', userRoute);

module.exports = route;
