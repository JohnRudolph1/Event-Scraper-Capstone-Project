const PORT = 4200;
const puppeteer = require("puppeteer");

async function getEvents() {
  let eventUrl = "https://www.eventbrite.com/d/mo--st-louis/all-events/";
  let browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto(eventUrl);
  while (
    await page.$(
      "#chevron-right-chunky_svg__eds-icon--chevron-right-chunky_base"
    )
  ) {
    await page.waitForSelector(".eds-event-card-content__content");
    const eventResults = await page.$$(".eds-event-card-content__content");
    // for (let content of eventResults) {
    //   await content.click();
    //   setTimeout(function () {
    //     //code goes here
    //   }, 2000);

      //scraping code goes here
      // await page.close()
    
  }
}

module.exports = getEvents;
//loop through all content individually
//click on each one and scrape page
//once done page.close or go back

//filter eventContent immediatley
