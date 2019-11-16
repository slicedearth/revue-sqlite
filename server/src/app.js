const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require("./models");
const config = require("./config/config");
const history = require("connect-history-api-fallback");
const app = express();
// Breaks Postman Requests
// app.use(history());
app.use(helmet());
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

require("./routes.js")(app);
sequelize.sync().then(() => {
  app.listen(process.env.PORT || config.port);
  console.log(`Server started on port ${config.port}`);
});
