const { User } = require("../models");
module.exports = {
  // Update User
  async putUserById(req, res) {
    try {
      const user = await User.update(req.body, {
        where: { id: req.params.userId }
      });
      res.send(user);
    } catch (sendUsrByIdErr) {
      res.status(500).send({
        error:
          "An error has occurred while trying to update a user via it's ID. If the problem persists please contact us."
      });
    }
  },
  // Delete User
  async deleteUser(req, res) {
    try {
      const { userId } = req.params;
      const user = await User.findOne({
        where: {
          id: userId
        }
      });
      await user.destroy();
      res.send(user);
    } catch (deleteUsrErr) {
      res.status(500).send({
        error: "An error occurred while trying to delete the review."
      });
    }
  }
};
