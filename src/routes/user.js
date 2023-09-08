const addUserHandler = require("../controllers/user/addUser");
const deleteUserHandler = require("../controllers/user/deleteUser");
const getUserDetailHandler = require("../controllers/user/getUserDetail");
const getUserListHandler = require("../controllers/user/getUserList");
const updateUserHandler = require("../controllers/user/updateUser");

const route = require("express").Router();

route.post("/", addUserHandler);
route.patch("/:id", updateUserHandler);
route.delete("/:id", deleteUserHandler);
route.get("/:id", getUserDetailHandler);
route.get("/", getUserListHandler);

module.exports = route;
