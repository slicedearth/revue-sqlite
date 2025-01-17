import Api from "@/services/Api";
export default {
  getBlogs(search) {
    return Api().get("blog", {
      params: {
        search: search
      }
    });
  },
  postBlogs(blogs, token) {
    return Api().post("blog", blogs, {
      headers: { Authorization: "Bearer " + token }
    });
  },
  getBlogById(blogId) {
    return Api().get(`blog/${blogId}`);
  },
  putBlogById(blogId, blogs, token) {
    return Api().put(`blog/${blogId}`, blogs, {
      headers: { Authorization: "Bearer " + token }
    });
  },
  deleteBlog(blogId, token) {
    return Api().delete(`blog/${blogId}`, {
      headers: { Authorization: "Bearer " + token }
    });
  }
};
