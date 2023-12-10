const Drink = require("../models/drinks-model");

const getAllDataMinuman = async () => {
  return await Drink.findAll();
};

module.exports = {
  getAllDataMinuman,
};
