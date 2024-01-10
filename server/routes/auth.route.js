const express = require('express');
const upload = require('../config/multer');

const loginController = require('../controllers/login.controller');
const registerController = require('../controllers/register.controller');
const isUserController = require('../controllers/isUser.controller');
const verifyToken = require('../middleware/verifyToken');
const route = express.Router();

route.post('/auth/login', loginController);
// route.post('/auth/register', upload.single('profilePic'), registerController);
route.post('/auth/register', registerController);
route.get('/auth/isUser', verifyToken, isUserController);

module.exports = route;
