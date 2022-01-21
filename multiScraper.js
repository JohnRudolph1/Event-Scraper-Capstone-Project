
const puppeteer = require("puppeteer");

(async () => {
    const data = [];

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.eventbrite.com/e/laugh-and-love-featuring-david-mann-sr-and-jonat-tickets-218079490627?aff=ebdssbdestsearch");
  const h1 = await page.$eval(".listing-hero-body h1", (h1) => h1.textContent);
  const desc = await page.$eval(".has-user-generated-content strong", (strong) => strong.textContent);
  const location = await page.$eval(".event-details__data p", (p) => p.textContent);


//l-mar-top-3 DESCRIPTION
//event-details__data DATE P p p 
//micro-ticket-box__btn-wrapper
// a href link
data.push (
h1,
desc,
location,


)


  console.log(data);
})();
