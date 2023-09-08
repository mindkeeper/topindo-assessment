const { sequelize, User, Hobby } = require("../../models");
const addUserHandler = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const { hobbies: hobbiesBody, ...userBody } = req.body;
    const user = await User.create({ ...userBody }, { transaction: t });

    const hobbies = await Hobby.bulkCreate(
      hobbiesBody.map((hobby) => ({
        name: hobby,
        user_id: user.id,
      })),
      { transaction: t }
    );
    return res
      .status(201)
      .json({
        message: "success",
        data: { user: { ...user.dataValues, hobbies } },
      });
  } catch (error) {
    await t.rollback();
    return next(error);
  }
};

module.exports = addUserHandler;
