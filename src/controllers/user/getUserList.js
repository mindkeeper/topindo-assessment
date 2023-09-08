const asyncErrorHandler = require("../asyncErrorHandler");
const { User, Hobby, Sequelize } = require("../../models");
const CustomError = require("../../utils/CustomError");
const getPagination = require("../../utils/getPagination");
const getUserListHandler = asyncErrorHandler(async (req, res, next) => {
  const { name, age, page = 1, limit = 5 } = req.query;
  const offset = (parseInt(page) - 1) * parseInt(limit);
  const { Op } = Sequelize;
  const conditions = {
    ...(!name ? {} : { name: { [Op.like]: `%${name.toLowerCase()}%` } }),
    ...(!age ? {} : { age }),
  };

  const { count, rows: users } = await User.findAndCountAll({
    where: conditions,
    offset,
    limit: parseInt(limit),
    attributes: { exclude: ["createdAt", "updatedAt"] },
    collate: "utf8mb4_general_ci",
  });
  if (users.length === 0)
    return next(new CustomError("data user tidak ditemukan"));
  const pagination = getPagination(count, page, limit);
  return res
    .status(200)
    .json({ message: "success", data: { users, pagination } });
});

module.exports = getUserListHandler;
