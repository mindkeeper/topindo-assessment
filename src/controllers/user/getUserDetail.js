const asyncErrorHandler = require("../asyncErrorHandler");
const { User, Hobby } = require("../../models");
const CustomError = require("../../utils/CustomError");
const getUserDetailHandler = asyncErrorHandler(async (req, res, next) => {
  const userId = req.params.id;
  const user = await User.findByPk(userId, {
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
    include: [
      {
        model: Hobby,
        as: "hobbies",
        attributes: {
          exclude: ["userId", "createdAt", "updatedAt"],
        },
      },
    ],
  });
  if (!user) return next(new CustomError("user not found", 404));
  return res.status(200).json({ message: "success", data: { user } });
});

module.exports = getUserDetailHandler;
