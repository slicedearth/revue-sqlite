import Api from "@/services/Api";

export default {
  getReviews(search) {
    return Api().get("reviews", {
      params: {
        search: search
      }
    });
  },
  postReviews(reviews, token) {
    return Api().post("reviews", reviews, {
      headers: { Authorization: "Bearer " + token }
    });
  },
  getReviewById(reviewId, token) {
    return Api().get(`reviews/${reviewId}`, {
      headers: { Authorization: "Bearer " + token }
    });
  },
  putReviewById(reviewId, reviews, token) {
    return Api().put(`reviews/${reviewId}`, reviews, {
      headers: { Authorization: "Bearer " + token }
    });
  },
  deleteReview(reviewId, token) {
    return Api().delete(`reviews/${reviewId}`, {
      headers: { Authorization: "Bearer " + token }
    });
  }
};
