// // const { default: axios } = require("axios");
// // app.use(cors());

// window.addEventListener("load", (event) => {
//   //selector shows which button id will be selected

//   const allButton = document.querySelector("#scrape");
//   const musicButton = document.querySelector("#music");
//   const communityButton = document.querySelector("#community");
//   const filmButton = document.querySelector("#film");
//   const techButton = document.querySelector("#tech");
//   const sportsButton = document.querySelector("#sports");
//   const outdoorsButton = document.querySelector("#outdoors");

//   allButton.addEventListener("click", async () => {
//     //awaits for the fetched src to be called upon

//     fetch("http://localhost:4200/scrape")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         data.forEach((article) => {
//           const eventData =
//             `<div><h3>
//             ${article.title}
//             </h3>` +
//             `<div><h3>
//             ${article.date}
//             </h3>` +
//             `<div><h3>
//             ${article.location}
//             </h3><br>` +
//             `<a href = "${article.url}">Event Link</a>
//             </div><br><br>`;
//           allButton.insertAdjacentHTML("beforeend", eventData);
//         });
//       });
//   });

//   musicButton.addEventListener("click", async () => {
//     //awaits for the fetched src to be called upon

//     fetch("http://localhost:4200/music")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         data.forEach((article) => {
//           const eventData =
//             `<div><h3>
//             ${article.title}
//             </h3>` +
//             `<div><h3>
//             ${article.date}
//             </h3>` +
//             `<div><h3>
//             ${article.location}
//             </h3><br>` +
//             `<a href = "${article.url}">Event Link</a>
//             </div><br><br>`;
//           musicButton.insertAdjacentHTML("beforeend", eventData);
//         });
//       });
//   });
//   communityButton.addEventListener("click", async () => {
//     //awaits for the fetched src to be called upon

//     fetch("http://localhost:4200/community")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         data.forEach((article) => {
//           const eventData =
//             `<div><h3>
//             ${article.title}
//             </h3>` +
//             `<div><h3>
//             ${article.date}
//             </h3>` +
//             `<div><h3>
//             ${article.location}
//             </h3><br>` +
//             `<a href = "${article.url}">Event Link</a>
//             </div><br><br>`;
//           communityButton.insertAdjacentHTML("beforeend", eventData);
//         });
//       });
//   });
//   outdoorsButton.addEventListener("click", async () => {
//     //awaits for the fetched src to be called upon

//     fetch("http://localhost:4200/outdoors")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         data.forEach((article) => {
//           const eventData =
//             `<div><h3>
//             ${article.title}
//             </h3>` +
//             `<div><h3>
//             ${article.date}
//             </h3>` +
//             `<div><h3>
//             ${article.location}
//             </h3><br>` +
//             `<a href = "${article.url}">Event Link</a>
//             </div><br><br>`;
//           outdoorsButton.insertAdjacentHTML("beforeend", eventData);
//         });
//       });
//   });
//   sportsButton.addEventListener("click", async () => {
//     //awaits for the fetched src to be called upon

//     fetch("http://localhost:4200/sports")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         data.forEach((article) => {
//           const eventData =
//             `<div><h3>
//             ${article.title}
//             </h3>` +
//             `<div><h3>
//             ${article.date}
//             </h3>` +
//             `<div><h3>
//             ${article.location}
//             </h3><br>` +
//             `<a href = "${article.url}">Event Link</a>
//             </div><br><br>`;
//           sportsButton.insertAdjacentHTML("beforeend", eventData);
//         });
//       });
//   });
//   techButton.addEventListener("click", async () => {
//     //awaits for the fetched src to be called upon

//     fetch("http://localhost:4200/tech")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         data.forEach((article) => {
//           const eventData =
//             `<div><h3>
//             ${article.title}
//             </h3>` +
//             `<div><h3>
//             ${article.date}
//             </h3>` +
//             `<div><h3>
//             ${article.location}
//             </h3><br>` +
//             `<a href = "${article.url}">Event Link</a>
//             </div><br><br>`;
//           techButton.insertAdjacentHTML("beforeend", eventData);
//         });
//       });
//   });
//   filmButton.addEventListener("click", async () => {
//     //awaits for the fetched src to be called upon

//     fetch("http://localhost:4200/film")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         data.forEach((article) => {
//           const eventData =
//             `<div><h3>
//             ${article.title}
//             </h3>` +
//             `<div><h3>
//             ${article.date}
//             </h3>` +
//             `<div><h3>
//             ${article.location}
//             </h3><br>` +
//             `<a href = "${article.url}">Event Link</a>
//             </div><br><br>`;
//           filmButton.insertAdjacentHTML("beforeend", eventData);
//         });
//       });
//   });
// });

// //issues im having are being able to take what has been rendered
// //into html and making it available on my main html page.
// //i used the localhost a tag with an href bypassing the button altogether and it works
// //but it is printed in json format instead of html(which makes sense because the local host is pure json)
// //i need to either find a way to pare hat info to html or somehow utilze this get fetch
// // how to specify a fetch is a get request

// //  async function getUserAsync(name)
// //  {
// //    let response = await fetch(`https:api.github.com/users/${name}`);
// //    let data = await response.json()
// //    return data;
// //  }
