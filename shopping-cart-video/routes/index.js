var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/testing", function (req, res, next) {
  res.render("index", { title: "Welcome to testing" });
});

module.exports = router;
