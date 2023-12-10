const { DataTypes } = require("sequelize");
const sequalize = require("../config/sequalize");

const Drink = sequalize.define("Drink", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    AutoIncrement: true,
  },
  title: DataTypes.STRING,
  price: DataTypes.INTEGER,
  description: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updateAt: DataTypes.DATE,
});

module.exports = Drink;
