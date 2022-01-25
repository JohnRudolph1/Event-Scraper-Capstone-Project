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