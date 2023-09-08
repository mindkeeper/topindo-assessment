const authController = require("../controllers/auth");

const route = require("express").Router();

route.post("/login", authController.login);

module.exports = route;
