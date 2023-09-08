const addUserHandler = require("../controllers/user/addUser");
const getUserDetailHandler = require("../controllers/user/getUserDetail");
const updateUserHandler = require("../controllers/user/updateUser");

const route = require("express").Router();

route.post("/", addUserHandler);
route.get("/:id", getUserDetailHandler);
route.patch("/:id", updateUserHandler);

module.exports = route;
