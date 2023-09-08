require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.raw());
app.use(cors({ origin: "*" }));

app.listen(8080, () => {
  console.log("server runnint at port 8080");
});
