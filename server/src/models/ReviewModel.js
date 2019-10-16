module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define("Review", {
    reviewTitle: { type: DataTypes.STRING },
    albumArt: { type: DataTypes.STRING },
    reviewAuthor: { type: DataTypes.STRING },
    album: { type: DataTypes.STRING },
    artist: { type: DataTypes.STRING },
    genre: { type: DataTypes.STRING },
    reviewText: { type: DataTypes.TEXT }
  });
  return Review;
};
