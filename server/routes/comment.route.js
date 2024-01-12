const express = require('express');
const { createComment, deleteComment } = require('../controllers/comment.controller');
const verifyToken = require('../middleware/verifyToken');
const route = express.Router();

route.post('/comment/', verifyToken, createComment);
route.delete('/comment/:id', verifyToken, deleteComment);

module.exports = route;
