const { User } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

function jwtSignUser(user) {
  const tokenExpiryTime = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: tokenExpiryTime
  });
}
module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      const userJSON = user.toJSON();
      res.send({
        user: userJSON,
        token: jwtSignUser(userJSON)
      });
    } catch (registerErr) {
      req.res.status(400).send({
        error:
          "The email address and/or username are already in use. Please enter a different username/email."
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email: email
        }
      });
      if (!user) {
        return res.status(401).send({
          error: "The login information was incorrect. Please try again."
        });
      }
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(401).send({
          error: "The login information was incorrect. Please try again."
        });
      }
      const userJSON = user.toJSON();
      res.send({
        user: userJSON,
        token: jwtSignUser(userJSON)
      });
    } catch (loginErr) {
      res.status(500).send({
        error:
          "An error has occurred while trying to login. If the problem persists, please contact us."
      });
    }
  }
};
