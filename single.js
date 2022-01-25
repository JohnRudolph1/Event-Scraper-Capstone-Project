const puppeteer = require("puppeteer");

(async () => {
  let url = "https://www.facebook.com/events/search/?q=Music&sde=AbrQ9KopLfqYT7heXVVCxznkZYxRr9hU1JA4cdLbJhjgs56yyeHW3e833A9dGP1WlEHOyagjWyFL9Y79gw-Ko1iVuJCILVkpVsHkmSbBFb3SEA&filters=eyJmaWx0ZXJfZXZlbnRzX2NhdGVnb3J5OjAiOiJ7XCJuYW1lXCI6XCJmaWx0ZXJfZXZlbnRzX2NhdGVnb3J5XCIsXCJhcmdzXCI6XCIxODIxOTQ4MjYxNDA0NDgxXCJ9In0%3D";
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
  });

  const page = await browser.newPage();
  //"https://www.eventbrite.com/d/mo--st-louis/all-events/"
  await page.goto(url);

  const pageResults = await page.evaluate(() => {
    let items = document.querySelectorAll(".rq0escxv ");
    const results = [];
    items.forEach((item) => {
      results.push({
        title: item.querySelector(
          ".tojvnm2t "
        ).innerText,
        date: item.querySelector(".d2edcug0 ")
          .innerText,
        location: item.querySelector(".eds-event-card-content__sub")
          .innerText,
        url: item.querySelector("a").getAttribute("href"),
        // img: item.querySelector("img").getAttribute("src"),
      });
    });
    for (let i = 2; i <= results.length; i += 2) results.splice(i, 1);
    return results;
  });
  console.log(data);

  await browser.close();
});

//if you want to scrape other sites just make a new scraper and export the function
//then add the function to the server to allow it to fetch from new site

// let scrape = document.querySelector("#scrape")

// allButton.addEventListener("click", async () => {
//     //awaits for the fetched src to be called upon

//        fetch("http:localhost:4200/scrape");
//       .then((response) => {
//         return response.json();
//       }).then((data) => {
//             data.forEach((item) => {
//   //takes everything fetched and parses it into html layout provided

//                const eventItems =
//                `<div><h3>
//                ${item.title}
//                </h3>` +
//                `<div><h3>
//                ${item.date}
//                </h3>` +
//                `<div><h3>
//                ${item.location}
//                </h3>` +
//                `<a href = "${item.url}">Event Link</a>
//                </div><br><br>`;
//                //innerHTML takes the content inside of the event items
//                //and turns it into the html layout i provided
//                allButtons.insertAdjacentHTML("beforeend", eventItems);
//              })
//             })

//         })

//             const element1 = document.querySelector("#scrape");
// const element2 = document.querySelector("#music");
// const element3 = document.querySelector("#community");
// const element4 = document.querySelector("#film");
// const element5 = document.querySelector("#tech");
// const element6 = document.querySelector("#sports");
// const element7 = document.querySelector("#outdoors");

// [element1, element2, element3, element4, element5, element6, element7].forEach(
//   (element) => {
//     element.addEventListner("click", (e) => {
//         //awaits for the fetched src to be called upon
//          fetch("http://localhost:4200/scrape");
//          fetch("http://localhost:4200/music");
//          fetch("http://localhost:4200/community");
//          fetch("http://localhost:4200/film");
//          fetch("http://localhost:4200/tech");
//          fetch("http://localhost:4200/sports");
//          fetch("http://localhost:4200/outdoors")
//           .then((response) => {
//             return response.json();
//           })
//           .then((data) => {
//             data.forEach((article) => {
//               const eventData =
//                 `<div><h3>
//                           ${article.title}
//                           </h3>` +
//                 `<div><h3>
//                           ${article.date}
//                           </h3>` +
//                 `<div><h3>
//                           ${article.location}
//                           </h3>` +
//                 `<a href = "${article.url}">Event Link</a>
//                           </div><br><br>`;
//               scrape.insertAdjacentHTML("beforeend", eventData);
//             });
//           });
//       });
//     });
