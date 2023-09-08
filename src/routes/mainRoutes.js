const route = require("express").Router();

const verifyToken = require("../middlewares/verifyToken");
const loginRoutes = require("./auth");
const userRoutes = require("./user");
const prefix = "/api";

route.use(`${prefix}`, loginRoutes);
route.use(`${prefix}/user`, verifyToken, userRoutes);
module.exports = route;
