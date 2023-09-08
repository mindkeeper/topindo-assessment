require("dotenv").config();
const express = require("express");
const cors = require("cors");
const CustomError = require("./src/utils/CustomError");
const globalError = require("./src/controllers/globalError");
const routes = require("./src/routes/mainRoutes");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));
app.use(routes);

app.all("*", (req, res, next) => {
  const err = new CustomError(
    `cant find ${req.originalUrl} in this server`,
    404
  );
  next(err);
});

app.use(globalError);
app.listen(8080, () => {
  console.log("server runnint at port 8080");
});
