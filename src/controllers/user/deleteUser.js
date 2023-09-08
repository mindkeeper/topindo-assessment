const asyncErrorHandler = require("../asyncErrorHandler");
const { User, Hobby, sequelize } = require("../../models");
const CustomError = require("../../utils/CustomError");

const deleteUserHandler = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    if (!user) throw new CustomError("user tidak ditemukan", 404);
    await Hobby.destroy({ where: { user_id: userId }, transaction: t });
    await user.destroy({ transaction: t });
    await t.commit();
    return res.status(200).json({ message: "success" });
  } catch (error) {
    await t.rollback();
    return next(error);
  }
};

module.exports = deleteUserHandler;
