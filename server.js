const PORT = 4200;
const express = require("express");
const app = express();
const cors = require("cors");
const getEvents = require("./eventPageScraper");
app.use(cors());

// let url = "http://localhost:4200/scrape";

app.get("/", async  (req, res) => {
  res.json("This is my webscraper");
});

app.get("/scrape", async (req, res) => {
  let results = await getEvents()
  console.log(results)
});
app.listen(PORT);

// app.get("/scrape", async function (req, res) {
//   res.json("This is my webscraper");
//   await getEvents();
//   res.json("Scraped");
// });
// app.listen(PORT);
