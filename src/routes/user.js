const addUserHandler = require("../controllers/user/addUser");
const deleteUserHandler = require("../controllers/user/deleteUser");
const getUserDetailHandler = require("../controllers/user/getUserDetail");
const updateUserHandler = require("../controllers/user/updateUser");

const route = require("express").Router();

route.post("/", addUserHandler);
route.get("/:id", getUserDetailHandler);
route.patch("/:id", updateUserHandler);
route.delete("/:id", deleteUserHandler);

module.exports = route;
