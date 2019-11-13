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
    // console.log(token);
    return Api().post("reviews", reviews, {
      headers: { Authorization: "Bearers" + token }
    });
  },
  getReviewById(reviewId) {
    return Api().get(`reviews/${reviewId}`);
  },
  putReviewById(reviewId, reviews, token) {
    return Api().put(`reviews/${reviewId}`, reviews, {
      headers: { Authorization: "Bearers" + token }
    });
  },
  deleteReview(reviewId, token) {
    return Api().delete(`reviews/${reviewId}`, {
      headers: { Authorization: "Bearers" + token }
    });
  }
};
