// for (let content of eventResults) {
//   await content.click();
//   setTimeout(function () {
//     //code goes here
//   }, 2000);
// let title = document.querySelector(".eds-event-card__formatted-name--is-clamped-three").innerText
//scraping code goes here

// module.exports = getEvents;
//loop through all content individually
//click on each one and scrape page
//once done page.close or go back

//filter eventContent immediatley

const port = 4200;
const puppeteer = require("puppeteer");

async function getEvents() {
  const url = "https://www.eventbrite.com/d/mo--st-louis/all-events/";
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  let totalData = [];
  await page.goto(url);
  while (
    await page.$(
      "#chevron-right-chunky_svg__eds-icon--chevron-right-chunky_base"
    )
  ) {
    let data = await page.evaluate(() => {
      let results = [];
      let items = document.querySelectorAll(".eds-event-card-content__content");

      items.forEach((item) => {
        results.push({
          title: item.querySelector(
            ".eds-event-card__formatted-name--is-clamped-three"
          ).innerText,
          date: item.querySelector(".eds-event-card-content__sub-title")
            .innerText,
          Location: item.querySelector(".eds-event-card-content__sub")
            .innerText,
          url: item.querySelector("a").getAttribute("href"),
          // img: item.querySelector("img").getAttribute("src"),
        });
      });
      for (let i = 2; i <= results.length; i += 2) results.splice(i, 1);

      return results;
    });

    console.log(data);
    totalData += data;
    await page.waitForSelector(
      "#chevron-right-chunky_svg__eds-icon--chevron-right-chunky_base"
    );
    await page.click(
      "#chevron-right-chunky_svg__eds-icon--chevron-right-chunky_base"
    );
  }
  await browser.close();
  return totalData;
}
getEvents();
module.exports = getEvents;
