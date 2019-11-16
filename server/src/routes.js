const AuthenticationController = require("./controllers/AuthenticationController");
const ReviewsController = require("./controllers/ReviewsController");
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy");
const BlogsController = require("./controllers/BlogsController");
const ReviewsControllerPolicy = require("./policies/ReviewsControllerPolicy");
const BlogsControllerPolicy = require("./policies/BlogsControllerPolicy");
const UserController = require("./controllers/UserController");
module.exports = app => {
  // Authentication Routes
  app.post(
    "/register",
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );
  app.post("/login", AuthenticationController.login);

  // User Routes
  app.put("/user/:userId", UserController.putUserById);
  app.delete("/user/:userId", UserController.deleteUser);

  // Review Routes
  app.get("/reviews", ReviewsController.getReviews);
  app.post(
    "/reviews",
    AuthenticationController.verifyToken,
    ReviewsControllerPolicy.postReviews,
    ReviewsController.postReviews
  );
  app.get("/reviews/:reviewId", ReviewsController.getReviewById);
  app.put(
    "/reviews/:reviewId",
    AuthenticationController.verifyToken,
    ReviewsControllerPolicy.putReviewById,
    ReviewsController.putReviewById
  );
  app.delete(
    "/reviews/:reviewId",
    AuthenticationController.verifyToken,
    ReviewsController.deleteReview
  );

  // Blog Routes
  app.get("/blog", BlogsController.getBlogs);
  app.post(
    "/blog",
    AuthenticationController.verifyToken,
    BlogsControllerPolicy.postBlogs,
    BlogsController.postBlogs
  );
  app.get("/blog/:blogId", BlogsController.getBlogById);
  app.put(
    "/blog/:blogId",
    AuthenticationController.verifyToken,
    BlogsControllerPolicy.putBlogById,
    BlogsController.putBlogById
  );
  app.delete(
    "/blog/:blogId",
    AuthenticationController.verifyToken,
    BlogsController.deleteBlog
  );
};
