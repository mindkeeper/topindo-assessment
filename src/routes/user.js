const addUserHandler = require("../controllers/user/addUser");
const getUserDetailHandler = require("../controllers/user/getUserDetail");

const route = require("express").Router();

route.post("/", addUserHandler);
route.get("/:id", getUserDetailHandler);

module.exports = route;
