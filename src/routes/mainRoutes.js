const route = require("express").Router();

const loginRoutes = require("./auth");
const prefix = "/api";

route.use(`${prefix}`, loginRoutes);
module.exports = route;
