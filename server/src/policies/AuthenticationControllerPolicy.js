const Joi = require("@hapi/joi");
module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email(),
      username: Joi.string()
        .alphanum()
        .min(3)
        .max(20),
      password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,64}$"))
    };
    const { error, value } = Joi.validate(req.body, schema);
    if (error) {
      switch (error.details[0].context.key) {
        case "email":
          res.status(400).send({
            error: "The email address is invalid, please try again."
          });
          break;
        case "username":
          res.status(400).send({
            error:
              "The username is invalid, please try again. A username must be between 3 and 20 characters and can only contain alphanumeric characters."
          });
          break;
        case "password":
          res.status(400).send({
            error: `${error}The password must contain between 8 - 64 characters and can be comprised of letters (uppercase and lowercase) and numbers.`
          });
          break;
        default:
          res.status(500).send({
            error:
              "Unknown error with user input. Please contact us for assistance."
          });
      }
    } else {
      next();
    }
  }
};
