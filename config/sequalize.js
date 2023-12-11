const Sequalize = require("sequelize");

const sequalize = new Sequalize(process.env.MYSQL_URI, {
  dialect: "mysql",
});

module.exports = sequalize;
