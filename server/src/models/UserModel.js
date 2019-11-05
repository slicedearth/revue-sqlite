const bcrypt = require("bcrypt");
async function hashPassword(user) {
  if (!user.changed("password")) {
    return;
  }
  const salt = await bcrypt.genSalt(10);
  const hashPasswordValue = await bcrypt.hash(user.password, salt);
  user.setDataValue("password", hashPasswordValue);
}
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: {
        type: DataTypes.STRING
      }
    },
    {
      hooks: {
        beforeSave: hashPassword
      }
    }
  );
  User.prototype.comparePassword = async function(password) {
    try {
      const validPassword = await bcrypt.compare(password, this.password);
      return validPassword;
    } catch (pwErr) {
      res.status(400).send({
        pwErr: "Incorrect password"
      });
    }
  };
  return User;
};
