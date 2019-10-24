const { Review } = require("../models");
const { Op } = require("../models");
module.exports = {
  async getReviews(req, res) {
    try {
      let reviews = null;
      const search = req.query.search;
      if (search) {
        reviews = await Review.findAll({
          where: {
            [Op.or]: [
              { artist: { [Op.like]: `%${search}%` } },
              { album: { [Op.like]: `%${search}%` } },
              { genre: { [Op.like]: `%${search}%` } },
              { reviewAuthor: { [Op.like]: `%${search}%` } }
            ]
          }
        });
      } else {
        reviews = await Review.findAll({
          limit: 9
        });
      }
      res.send(reviews);
    } catch (fetchRevErr) {
      res.status(500).send({
        error:
          "An error occurred while trying to retrieve reviews. If the problem persists please contact us."
      });
    }
  },
  async postReviews(req, res) {
    try {
      const reviews = await Review.create(req.body);
      res.send(reviews);
    } catch (sendRevErr) {
      res.status(500).send({
        error:
          "An error has occurred while trying to post your review. If the problem persists, please contact us."
      });
    }
  },
  async getReviewById(req, res) {
    try {
      const reviews = await Review.findOne({
        where: { id: req.params.reviewId }
      });
      res.send(reviews);
    } catch (fetchRevByIdErr) {
      res.status(500).send({
        error:
          "An error has occurred while trying to retrieve a review via it's ID. If the problem persists please contact us."
      });
    }
  },
  async putReviewById(req, res) {
    try {
      const reviews = await Review.update(req.body, {
        where: { id: req.params.reviewId }
      });
      res.send(reviews);
    } catch (sendRevByIdErr) {
      res.status(500).send({
        error:
          "An error has occurred while trying to update a review via it's ID. If the problem persists please contact us."
      });
    }
  },
  async deleteReview(req, res) {
    try {
      const { reviewId } = req.params;
      const review = await Review.findOne({
        where: {
          id: reviewId
        }
      });
      await review.destroy();
      res.send(review);
    } catch (deleteRevErr) {
      res.status(500).send({
        error: "An error occurred while trying to delete the review."
      });
    }
  }
};
