// const { default: axios } = require("axios");
// app.use(cors());

window.addEventListener("load",  (event) => {

    //selector shows which button id will be selected
    const scrape = document.querySelector("#scrape")
    scrape.addEventListener("click", async () => {
        //awaits for the fetched src to be called upon
        fetch("http://localhost:4200/scrape")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          data.forEach((article) => {
            const eventData =
              `<div><h3> 
              ${article.title}
              </h3>` +
              `<div><h3> 
              ${article.date}
              </h3>` +
              `<div><h3> 
              ${article.location}
              </h3>` +
              `<a href = "${article.url}">Event Link</a>
              </div><br><br>`;
            scrape.insertAdjacentHTML("beforeend", eventData);
          });
        })
    })
})
        // .catch((err) => console.log(err));


//     const music = document.querySelector("#music");
//     const community = document.querySelector("#community");
//     const film = document.querySelector("#film");
//     const tech = document.querySelector("#tech");
//     const sports = document.querySelector("#sports");
//     const outdoors = document.querySelector("#outdoors");
  
//     allButton.addEventListener("click", async () => {
//     //awaits for the fetched src to be called upon
//       await fetch("http:localhost:4200/scrape");
//       await fetch("http:localhost:4200/music");
//       await fetch("http:localhost:4200/community");
//       await fetch("http:localhost:4200/film");
//       await fetch("http:localhost:4200/tech");
//       await fetch("http:localhost:4200/sports");
//       await fetch("http:localhost:4200/outoors");
//     })
  
//     //once called upon return(render) the response into json format
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
//              //catching and printing errors to the console
//            .catch((err) => console.log(err));
//             })
//           })