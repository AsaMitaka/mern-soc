const express = require('express');
const route = express.Router();
const {
  createPost,
  deletePost,
  getPost,
  getPosts,
  getUserPosts,
} = require('../controllers/post.controller');
const verifyToken = require('../middleware/verifyToken');

route.post('/post', verifyToken, createPost);
route.get('/post/all', getPosts);
route.get('/post/:id', getPost);
route.get('/user/:userId/posts', getUserPosts);
route.delete('/post/:id', verifyToken, deletePost);

module.exports = route;
