const express = require('express');
const route = express.Router();
const userControllers = require('../controllers/user_controllers');
route.get('/', userControllers.getHome());

module.exports = route;