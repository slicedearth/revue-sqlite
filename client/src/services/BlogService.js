import Api from "@/services/Api";

export default {
  getBlogs(search) {
    return Api().get("blog", {
      params: {
        search: search
      }
    });
  },
  postBlogs(blogs) {
    return Api().post("blog", blogs);
  },
  getBlogById(blogId) {
    return Api().get(`blog/${blogId}`);
  },
  putBlogById(blogId, blogs) {
    return Api().put(`blog/${blogId}`, blogs);
  },
  deleteBlog(blogId) {
    return Api().delete(`blog/${blogId}`);
  }
};
