module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define("Article", {
    articleTitle: { type: DataTypes.STRING },
    articleIMG: { type: DataTypes.STRING },
    articleAuthor: { type: DataTypes.STRING },
    articleText: { type: DataTypes.TEXT }
  });
  return Article;
};
