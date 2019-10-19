import Api from "@/services/Api";

export default {
  getReviews(search) {
    return Api().get("reviews", {
      params: {
        search: search
      }
    });
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
