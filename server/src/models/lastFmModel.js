module.exports = (sequelize, DataTypes) => {
  const lmMeta = sequelize.define("", {
    albumArt: { type: DataTypes.STRING },
    album: { type: DataTypes.STRING },
    artist: { type: DataTypes.STRING },
    genre: { type: DataTypes.STRING }
  });
};
return;
