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
  // Register
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
  // Login
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
  },
  // Verify
  verifyToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    if (typeof authHeader !== "undefined") {
      const auth = authHeader.split(" ");
      const authToken = auth[1];
      req.token = authToken;
      next();
    } else {
      res.sendStatus(403);
    }
    // return jwt.verify(token, config.authentication.jwtSecret);
  },
  // Verify User
  verifyUserToken(req, res, next) {
    verifyToken();
    if (user.username == review.reviewAuthor) {
      next();
    } else {
      res.sendStatus(403);
    }
  }
};
