const Joi = require("@hapi/joi");
module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email(),
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
