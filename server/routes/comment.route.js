const express = require('express');
const { createComment, deleteComment } = require('../controllers/comment.controller');
const verifyToken = require('../middleware/verifyToken');
const route = express.Router();

route.post('/comment/create', verifyToken, createComment);
route.delete('/comment/:commentId', verifyToken, deleteComment);

module.exports = route;
