var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// user + profile --> localhost:3000/user/profile
router.get("/profile", function (req, res, next) {
  res.send("Show My Profile");
});

module.exports = router;
