const PORT = 4200;
const express = require("express");
const app = express();
const path = require("path");
const res = require("express/lib/response");

const router = express.Router();
router.get("/music", (req, res) => {
  res.sendFile(path.join(__dirname + "/music.html"));
});
router.get("/community", (req, res) => {
  res.sendFile(path.join(__dirname + "/com.html"));
});
router.get("/film", (req, res) => {
  res.sendFile(path.join(__dirname + "/film.html"));
});
router.get("/tech", (req, res) => {
  res.sendFile(path.join(__dirname + "/tech.html"));
});
router.get("/sports", (req, res) => {
  res.sendFile(path.join(__dirname + "/sports.html"));
});
router.get("/outdoors", (req, res) => {
  res.sendFile(path.join(__dirname + "/outdoors.html"));
});
module.exports = router;
