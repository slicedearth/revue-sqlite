const path = require("path");

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || "ReVue DB",
    user: process.env.DB_USER || "rootUser",
    password: process.env.DB_PASS || "rootPassword",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      host: process.env.HOST || "localhost",
      storage: path.resolve(__dirname, "../../revueDB.sqlite"),
    },
  },

  jwtSecret: process.env.JWT_SECRET || "jwtSecret-Placeholder",
};
