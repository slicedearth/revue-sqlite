import Api from "@/services/Api";

export default {
  getArticles(search) {
    return Api().get("news", {
      params: {
        search: search
      }
    });
  },
  postArticles(articles) {
    return Api().post("news", articles);
  },
  getArticleById(articleId) {
    return Api().get(`news/${articleId}`);
  },
  putArticleById(articleId, articles) {
    return Api().put(`news/${articleId}`, articles);
  },
  deleteArticle(articleId) {
    return Api().delete(`news/${articleId}`);
  }
};