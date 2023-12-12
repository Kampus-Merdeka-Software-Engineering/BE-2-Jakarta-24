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
  image: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});

module.exports = Drink;
