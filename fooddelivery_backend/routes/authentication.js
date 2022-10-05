var express = require("express");
var router = express.Router();
const {
  useRegister,
  userLogin,
  checkUserExist,
} = require("../services/authentication.service");

router.post("/register", async (req, res, next) => {
  let body = req.body;
  console.log(body);
  let response = await useRegister(body);
  res.json(response);
});

router.post("/login", async (req, res, next) => {
  let body = req.body;
  console.log(body);
  let response = await userLogin(body);
  res.json(response);
});

router.get("/user-exist", async (req, res, next) => {
  let params = req.query;
  let response = await checkUserExist(params);
  res.json(response);
});

module.exports = router;