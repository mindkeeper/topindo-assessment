const asyncErrorHandler = require("../asyncErrorHandler");
const { User } = require("../../models");
const CustomError = require("../../utils/CustomError");
const updateUserHandler = asyncErrorHandler(async (req, res, next) => {
  const userId = req.params.id;

  const user = await User.findByPk(userId);

  if (!user) return next(new CustomError("user tidak ditemukan"));

  for (const key in req.body) {
    user[key] = req.body[key];
  }

  await user.save();

  return res.status(200).json({ message: "success", data: { user } });
});
module.exports = updateUserHandler;
