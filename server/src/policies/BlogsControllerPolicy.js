const Joi = require("@hapi/joi");
module.exports = {
  postBlogs(req, res, next) {
    const schema = {
      blogTitle: Joi.string()
        .min(5)
        .max(40),
      blogAuthor: Joi.string()
        .alphanum()
        .min(3)
        .max(20),
      blogIMG: Joi.string().uri(),
      blogText: Joi.string().min(15)
    };
    const { error, value } = Joi.validate(req.body, schema);
    if (error) {
      switch (error.details[0].context.key) {
        case "blogTitle":
          res.status(400).send({
            error:
              "The blog title is invalid, please try again. The title must be between 5 and 40 characters."
          });
          break;
        case "blogAuthor":
          res.status(400).send({
            error:
              "The blog author is invalid, please try again. The blog author must be between 3 and 20 characters and can only contain alphanumeric characters."
          });
          break;
        case "blogIMG":
          res.status(400).send({
            error:
              "The blog image link is invalid, please ensure that the URL is valid."
          });
          break;
        case "blogText":
          res.status(400).send({
            error:
              "The blog text is invalid. The blog text must be be at least 15 characters long."
          });
        default:
          res.status(500).send({
            error:
              "Unknown error with blog post input. Please contact us for assistance."
          });
      }
    } else {
      next();
    }
  },
  putBlogById(req, res, next) {
    const schema = {
      blogTitle: Joi.string()
        .min(5)
        .max(40),
      blogAuthor: Joi.string()
        .alphanum()
        .min(3)
        .max(20),
      blogIMG: Joi.string().uri(),
      blogText: Joi.string().min(15)
    };
    const { error, value } = Joi.validate(req.body, schema);
    if (error) {
      switch (error.details[0].context.key) {
        case "blogTitle":
          res.status(400).send({
            error:
              "The blog title is invalid, please try again. The title must be between 5 and 40 characters."
          });
          break;
        case "blogAuthor":
          res.status(400).send({
            error:
              "The blog author is invalid, please try again. The blog author must be between 3 and 20 characters and can only contain alphanumeric characters."
          });
          break;
        case "blogIMG":
          res.status(400).send({
            error:
              "The blog image link is invalid, please ensure that the URL is valid."
          });
          break;
        case "blogText":
          res.status(400).send({
            error:
              "The blog text is invalid. The blog text must be be at least 15 characters long."
          });
        default:
          res.status(500).send({
            error:
              "Unknown error with blog post input. Please contact us for assistance."
          });
      }
    } else {
      next();
    }
  }
};
