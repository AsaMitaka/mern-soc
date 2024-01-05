const express = require('express');
const upload = require('../config/multer');
const route = express.Router();
const { getUser, updateUser, deleteUser } = require('../controllers/user.controller');
const verifyToken = require('../middleware/verifyToken');

route.get('/user/:userId/', getUser);
route.patch('/user/:userId', verifyToken, upload.single('profilePic'), updateUser);
route.delete('/user/:userId', verifyToken, deleteUser);

module.exports = route;
