const { Router } = require("express");
const endpoint = Router();
const {
  getminuman,
  createMinuman,
} = require("../controller/coffee-controller");

endpoint.get("/minuman", getminuman);

endpoint.get("/minuman", getMinuman);
endpoint.post("/minuman", createMinuman);

module.exports = endpoint;
