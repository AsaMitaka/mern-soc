const express = require('express');
const upload = require('../config/multer');

const loginController = require('../controllers/login.controller');
const registerController = require('../controllers/register.controller');
const route = express.Router();

route.post('/auth/login', loginController);
route.post('/auth/register', upload.single('profilePic'), registerController);

module.exports = route;
