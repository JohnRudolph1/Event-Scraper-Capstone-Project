const PORT = 4200;
const axios = require("axios");
const express = require("express");
const app = express();
const path = require("path");

const cors = require("cors");
const getEvents = require("./eventPageScraper");
const res = require("express/lib/response");
app.use(cors());
app.use(express.static(path.join(__dirname, "html")));
// let url = "http://localhost:4200/scrape";

app.get("/", async (req, res) => {
  res.json("This is my webscraper");
});
//send get request to url/scrape
app.get("/scrape", async (req, res) => {
  let results = await getEvents(
    "https://www.eventbrite.com/d/mo--st-louis/all-events/"
  );
  //prints results to console and responds with seeing the link with json content
  console.log(results);
  res.json(results);
  // res.sendFile(path.join(__dirname + "index.html"));
});

app.get("/community", async (req, res) => {
  let results = await getEvents(
    "https://www.eventbrite.com/d/mo--st-louis/community--events/"
  );
  console.log(results);
  res.json(results);
  // res.sendFile(path.join(__dirname + "community.html"));
});
app.get("/music", async (req, res) => {
  let results = await getEvents(
    "https://www.eventbrite.com/d/mo--st-louis/music--events/"
  );
  console.log(results);
  res.json(results);
  // res.sendFile(path.join(__dirname + "music.html"));
});
app.get("/film", async (req, res) => {
  let results = await getEvents(
    "https://www.eventbrite.com/d/mo--st-louis/film-and-media--events/"
  );
  console.log(results);
  res.json(results);
  // res.sendFile(path.join(__dirname + "film.html"));
});
app.get("/tech", async (req, res) => {
  let results = await getEvents(
    "https://www.eventbrite.com/d/mo--st-louis/science-and-tech--events/"
  );
  console.log(results);
  res.json(results);
  // res.sendFile(path.join(__dirname + "tech.html"));
});
app.get("/sports", async (req, res) => {
  let results = await getEvents(
    "https://www.eventbrite.com/d/mo--st-louis/sports-and-fitness--events/"
  );
  console.log(results);
  res.json(results);
  // res.sendFile(path.join(__dirname + "sports.html"));
});
app.get("/outdoors", async (req, res) => {
  let results = await getEvents(
    "https://www.eventbrite.com/d/mo--st-louis/travel-and-outdoor--events/"
  );
  console.log(results);
  res.json(results);
  // res.sendFile(path.join(__dirname + "outdoors.html"));
});

app.listen(PORT);

// app.get("/scrape", async function (req, res) {
//   res.json("This is my webscraper");
//   await getEvents();
//   res.json("Scraped");
// });
// app.listen(PORT);
///path be local host
//res.send()
//set up api routes that serve up html
//express vid how to render html
