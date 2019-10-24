const AuthenticationController = require("./controllers/AuthenticationController");
const ReviewsController = require("./controllers/ReviewsController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");
const ArticlesController = require("./controllers/ArticlesController");
module.exports = app => {
  // Authentication Routes
  app.post(
    "/register",
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );
  app.post("/login", AuthenticationController.login);
  // Review Routes
  app.get("/reviews", ReviewsController.getReviews);
  app.post("/reviews", ReviewsController.postReviews);
  app.get("/reviews/:reviewId", ReviewsController.getReviewById);
  app.put("/reviews/:reviewId", ReviewsController.putReviewById);
  app.delete("/reviews/:reviewId", ReviewsController.deleteReview);
  // Article Routes
  app.get("/news", ArticlesController.getArticles);
  app.post("/news", ArticlesController.postArticles);
  app.get("/news/:articleId", ArticlesController.getArticleById);
  app.put("/news/:articleId", ArticlesController.putArticleById);
  app.delete("/news/:articleId", ArticlesController.deleteArticle);
};
