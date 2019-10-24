const { Article } = require("../models");
const { Op } = require("../models");
module.exports = {
  async getArticles(req, res) {
    try {
      let articles = null;
      const search = req.query.search;
      if (search) {
        articles = await Article.findAll({
          where: {
            [Op.or]: [
              { articleTitle: { [Op.like]: `%${search}%` } },
              { articleAuthor: { [Op.like]: `%${search}%` } },
              { articleText: { [Op.like]: `%${search}%` } }
            ]
          }
        });
      } else {
        articles = await Article.findAll({
          limit: 9
        });
      }
      res.send(articles);
    } catch (fetchArtErr) {
      res.status(500).send({
        error:
          "An error occurred while trying to retrieve the articles. If the problem persists please contact us."
      });
    }
  },
  async postArticles(req, res) {
    try {
      const articles = await Article.create(req.body);
      res.send(articles);
    } catch (sendArtErr) {
      res.status(500).send({
        error:
          "An error has occurred while trying to post the article. If the problem persists, please contact us."
      });
    }
  },
  async getArticleById(req, res) {
    try {
      const articles = await Article.findOne({
        where: { id: req.params.articleId }
      });
      res.send(articles);
    } catch (fetchArtByIdErr) {
      res.status(500).send({
        error:
          "An error has occurred while trying to retrieve the article. If the problem persists please contact us."
      });
    }
  },
  async putArticleById(req, res) {
    try {
      const articles = await Article.update(req.body, {
        where: { id: req.params.articleId }
      });
      res.send(articles);
    } catch (sendArtByIdErr) {
      res.status(500).send({
        error:
          "An error has occurred while trying to update the article. If the problem persists please contact us."
      });
    }
  },
  async deleteArticle(req, res) {
    try {
      const { articleId } = req.params;
      const articles = await Article.findOne({
        where: {
          id: articleId
        }
      });
      await articles.destroy();
      res.send(articles);
    } catch (deleteArtErr) {
      res.status(500).send({
        error: "An error occurred while trying to delete the article."
      });
    }
  }
};
