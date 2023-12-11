const { Router } = require("express");
const endpoint = Router();
const {
  getMinuman,
  createMinuman,
} = require("../controller/coffee-controller");

endpoint.get("/minuman", getMinuman);
endpoint.post("/minuman", createMinuman);

module.exports = endpoint;
