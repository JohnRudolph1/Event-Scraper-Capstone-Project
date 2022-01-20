const PORT = 4200;
const express = require("express");
const app = express();
const cors = require("cors");
const getEvents = require("./eventPageScraper");
app.use(cors());

const url = "https://www.eventbrite.com/d/mo--st-louis/all-article/";

app.get("/scrape", async function (req, res) {
  res.json("This is my webscraper");
  await getEvents();
  res.json("Scraped");
});
app.listen(PORT);