const express = require('express');
const route = express.Router();
const {
  createPost,
  deletePost,
  editPost,
  getPost,
  getPosts,
  getUserPosts,
} = require('../controllers/post.controller');
const verifyToken = require('../middleware/verifyToken');

route.post('/post', verifyToken, createPost);
route.get('/post/all', getPosts);
route.get('/post/:postId', getPost);
route.get('/user/:userId/posts', getUserPosts);
// route.patch('/post/:postId', verifyToken, editPost);
route.delete('/post/:postId', verifyToken, deletePost);

module.exports = route;
