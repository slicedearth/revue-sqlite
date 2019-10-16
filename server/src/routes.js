const AuthenticationController = require("./controllers/AuthenticationController");
const ReviewsController = require("./controllers/ReviewsController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");
module.exports = app => {
  app.post(
    "/register",
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );
  app.post("/login", AuthenticationController.login);
  app.get("/reviews", ReviewsController.getReviews);
  app.post("/reviews", ReviewsController.postReviews);
  app.get("/reviews/:reviewId", ReviewsController.getReviewById);
  app.put("/reviews/:reviewId", ReviewsController.putReviewById);
  app.delete("/reviews/:reviewId", ReviewsController.deleteReview);
};
