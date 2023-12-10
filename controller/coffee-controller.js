const { getALLDataMinuman } = require("../service/drink-service");

const getMinuman = async (req, res) => {
  let drinks = await getAllDataMinuman();

  res.json({
    message: "berhasil mendapatkan data",
    data: drinks,
  });
};

const createMinuman = async (req, res) => {
  const { title, price, description, image } = req.body;
  let createDrink = await createDataMinuman({
    title,
    price,
    description,
    image,
  });

  res.json({
    message: "berhasil menambahkan minuman",
    data: createDrink,
  });
};

module.exports = {
  getMinuman,
  createMinuman,
};
