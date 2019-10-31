const AuthenticationController = require("./controllers/AuthenticationController");
const ReviewsController = require("./controllers/ReviewsController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");
const BlogsController = require("./controllers/BlogsController");
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
  // Blog Routes
  app.get("/blog", BlogsController.getBlogs);
  app.post("/blog", BlogsController.postBlogs);
  app.get("/blog/:blogId", BlogsController.getBlogById);
  app.put("/blog/:blogId", BlogsController.putBlogById);
  app.delete("/blog/:blogId", BlogsController.deleteBlog);
};
