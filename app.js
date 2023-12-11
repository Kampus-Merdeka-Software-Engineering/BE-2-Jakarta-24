// deklarasi dari modul yang akan digunanakan
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// import middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// inisialisasi database dengan sequelize
const sequelize = require("./config/sequalize");
const { startSequelize } = require("./utils/sequelize");

// import model
const { drink } = require("./models/drinks-model");

// import routher

// inisialisasi router
const drinkRouter = require("./routes/drink-routes");
app.use("./drink", drinkRouter);

// inisialisasi server
app.listen(port, async () => {
  await startSequelize(sequelize);
  console.log("sever tunning on port $(port}");
});
