import Api from "@/services/Api";

export default {
  getReviews() {
    return Api().get("reviews");
  },
  postReviews(reviews) {
    return Api().post("reviews", reviews);
  },
  getReviewById(reviewId) {
    return Api().get(`reviews/${reviewId}`);
  },
  putReviewById(reviewId, reviews) {
    return Api().put(`reviews/${reviewId}`, reviews);
  },
  deleteReview(reviewId) {
    return Api().delete(`reviews/${reviewId}`);
  }
};
