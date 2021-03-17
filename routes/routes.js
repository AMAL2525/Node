var express = require("express");
var router = express.Router();


router.get("/", function (req, res) {
// let d = Date.now();
// var d1 = new Date("Sunday,Saturday");
// if () {next()}
// else {console.log("We are Closed")};
    res.render("home");
});
router.get("/contact", function (req, res) {

  res.render("contact");
});
router.get("/services", function (req, res) {

  res.render("services");
});



module.exports = router;