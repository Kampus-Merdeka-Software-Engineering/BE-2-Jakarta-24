const Sequalize = require("sequelize");

const sequalize = new Sequalize(
  "mysql://root:AD-HCG4gG3h12hFhg-fcA3bDFH5HaBDg@monorail.proxy.rlwy.net:36056/railway",
  {
    dialect: "mysql",
  }
);

module.exports = sequalize;
