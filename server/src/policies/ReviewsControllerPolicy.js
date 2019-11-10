const Joi = require("@hapi/joi");
module.exports = {
  postReviews(req, res, next) {
    const schema = {
      reviewTitle: Joi.string()
        .min(5)
        .max(40),
      reviewAuthor: Joi.string()
        .alphanum()
        .min(3)
        .max(20),
      albumArt: Joi.string().uri(),
      album: Joi.string().min(1),
      artist: Joi.string().min(1),
      genre: Joi.string().min(1),
      reviewText: Joi.string().min(15)
    };
    const { error, value } = Joi.validate(req.body, schema);
    if (error) {
      switch (error.details[0].context.key) {
        case "reviewTitle":
          res.status(400).send({
            error:
              "The review title is invalid, please try again. The title must be between 5 and 40 characters."
          });
          break;
        case "reviewAuthor":
          res.status(400).send({
            error:
              "The review author is invalid, please try again. The review author must be between 3 and 20 characters and can only contain alphanumeric characters."
          });
          break;
        case "albumArt":
          res.status(400).send({
            error:
              "The album art link is invalid, please ensure that the URL is valid."
          });
          break;
        case "album":
          res.status(400).send({
            error:
              "The album name is invalid. The album name must be be at least 1 character long."
          });
          break;
        case "artist":
          res.status(400).send({
            error:
              "The artist name is invalid. The artist name must be be at least 1 character long."
          });
          break;
        case "genre":
          res.status(400).send({
            error:
              "The genre name is invalid. The genre name must be be at least 1 character long."
          });
          break;
        case "reviewText":
          res.status(400).send({
            error:
              "The review text is invalid. The review text must be be at least 15 characters long."
          });
        default:
          res.status(500).send({
            error:
              "Unknown error with review input. Please contact us for assistance."
          });
      }
    } else {
      next();
    }
  },
  putReviewById(req, res, next) {
    const schema = {
      reviewTitle: Joi.string()
        .min(5)
        .max(40),
      reviewAuthor: Joi.string()
        .alphanum()
        .min(3)
        .max(20),
      albumArt: Joi.string().uri(),
      album: Joi.string().min(1),
      artist: Joi.string().min(1),
      genre: Joi.string().min(1),
      reviewText: Joi.string().min(15)
    };
    const { error, value } = Joi.validate(req.body, schema);
    if (error) {
      switch (error.details[0].context.key) {
        case "reviewTitle":
          res.status(400).send({
            error:
              "The review title is invalid, please try again. The title must be between 5 and 40 characters."
          });
          break;
        case "reviewAuthor":
          res.status(400).send({
            error:
              "The review author is invalid, please try again. The review author must be between 3 and 20 characters and can only contain alphanumeric characters."
          });
          break;
        case "albumArt":
          res.status(400).send({
            error:
              "The album art link is invalid, please ensure that the URL is valid."
          });
          break;
        case "album":
          res.status(400).send({
            error:
              "The album name is invalid. The album name must be be at least 1 character long."
          });
          break;
        case "artist":
          res.status(400).send({
            error:
              "The artist name is invalid. The artist name must be be at least 1 character long."
          });
          break;
        case "genre":
          res.status(400).send({
            error:
              "The genre name is invalid. The genre name must be be at least 1 character long."
          });
          break;
        case "reviewText":
          res.status(400).send({
            error:
              "The review text is invalid. The review text must be be at least 15 characters long."
          });
        default:
          res.status(500).send({
            error:
              "Unknown error with review input. Please contact us for assistance."
          });
      }
    } else {
      next();
    }
  }
};
