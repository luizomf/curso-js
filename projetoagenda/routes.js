const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// Rotas da home
route.get('/', homeController.index);

// Rotas de login
route.get('/login/index', loginController.index);

module.exports = route;
