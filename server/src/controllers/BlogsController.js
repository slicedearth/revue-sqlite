const { Blog } = require("../models");
const { Op } = require("../models");
module.exports = {
  async getBlogs(req, res) {
    try {
      let blogs = null;
      const search = req.query.search;
      if (search) {
        blogs = await Blog.findAll({
          where: {
            [Op.or]: [
              { blogTitle: { [Op.like]: `%${search}%` } },
              { blogAuthor: { [Op.like]: `%${search}%` } },
              { blogText: { [Op.like]: `%${search}%` } }
            ]
          }
        });
      } else {
        blogs = await Blog.findAll({
          limit: 9
        });
      }
      res.send(blogs);
    } catch (fetchArtErr) {
      res.status(500).send({
        error:
          "An error occurred while trying to retrieve the blogs. If the problem persists please contact us."
      });
    }
  },
  async postBlogs(req, res) {
    try {
      const blogs = await Blog.create(req.body);
      res.send(blogs);
    } catch (sendArtErr) {
      res.status(500).send({
        error:
          "An error has occurred while trying to post the blog. If the problem persists, please contact us."
      });
    }
  },
  async getBlogById(req, res) {
    try {
      const blogs = await Blog.findOne({
        where: { id: req.params.blogId }
      });
      res.send(blogs);
    } catch (fetchArtByIdErr) {
      res.status(500).send({
        error:
          "An error has occurred while trying to retrieve the blog. If the problem persists please contact us."
      });
    }
  },
  async putBlogById(req, res) {
    try {
      const blogs = await Blog.update(req.body, {
        where: { id: req.params.blogId }
      });
      res.send(blogs);
    } catch (sendArtByIdErr) {
      res.status(500).send({
        error:
          "An error has occurred while trying to update the blog. If the problem persists please contact us."
      });
    }
  },
  async deleteBlog(req, res) {
    try {
      const { blogId } = req.params;
      const blogs = await Blog.findOne({
        where: {
          id: blogId
        }
      });
      await blogs.destroy();
      res.send(blogs);
    } catch (deleteArtErr) {
      res.status(500).send({
        error: "An error occurred while trying to delete the blog."
      });
    }
  }
};
