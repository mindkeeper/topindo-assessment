const route = require("express").Router();

const loginRoutes = require("./auth");
const userRoutes = require("./user");
const prefix = "/api";

route.use(`${prefix}`, loginRoutes);
route.use(`${prefix}/user`, userRoutes);
module.exports = route;
