const asyncErrorHandler = require("./asyncErrorHandler");
const bcrypt = require("bcrypt");
const CustomError = require("../utils/CustomError");
const jwtHelper = require("../utils/jwtHelper");
module.exports = {
  login: asyncErrorHandler(async (req, res, next) => {
    const admin = {
      username: "user-admin",
      password: "test123",
    };
    const { username, password } = req.body;
    if (!username) return next(new CustomError("username is required", 400));

    if (!password) return next(new CustomError("password is required", 400));

    if (admin.username !== username)
      return next(new CustomError("username/password is wrong", 400));
    const hashPassword = await bcrypt.hash(admin.password, 10);

    const checkPassword = await bcrypt.compare(password, hashPassword);
    if (!checkPassword)
      return next(new CustomError("username/password is wrong", 400));

    const token = jwtHelper.createToken({ username, password });

    return res.status(200).json({ message: "success", data: { token } });
  }),
};
