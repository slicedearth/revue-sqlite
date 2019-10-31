module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define("Blog", {
    blogTitle: { type: DataTypes.STRING },
    blogIMG: { type: DataTypes.STRING },
    blogAuthor: { type: DataTypes.STRING },
    blogText: { type: DataTypes.TEXT }
  });
  return Blog;
};
