const addUserHandler = require("../controllers/user/addUser");

const route = require("express").Router();

route.post("/", addUserHandler);

module.exports = route;
