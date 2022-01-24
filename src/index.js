const { default: axios } = require("axios");


window.addEventListener("load", (event) => {
  const allButton = document.querySelector("#scrape");
  const allButton = document.querySelector("#music");
  const allButton = document.querySelector("#community");
  const allButton = document.querySelector("#film");
  const allButton = document.querySelector("#tech");
  const allButton = document.querySelector("#sports");
  const allButton = document.querySelector("#outdoors");

  allButton.addEventListener("click", async () => {
    await fetch("http://localhost:4200/scrape")
    await fetch("http://localhost:4200/music")
    await fetch("http://localhost:4200/community")
    await fetch("http://localhost:4200/film")
    await fetch("http://localhost:4200/tech")
    await fetch("http://localhost:4200/sports")
    await fetch("http://localhost:4200/outoors")
  })
  
})
   // newly added code
//       .then((response) => {
//         return response.json();
//       })
//       .then((items) => {
//         items.forEach((item) => {
//           const eventItems =
//           `<div><h3> 
//           ${item.title}
//           </h3>` +
//           `<div><h3> 
//           ${item.date}
//           </h3>` +
//           `<div><h3> 
//           ${item.location}
//           </h3>` +
//           `<a href = "${item.url}">Event Link</a>
//           </div><br><br>`;
//           feedDisplay.insertAdjacentHTML("beforeend", eventItems);
//         });
//       })
//       .catch((err) => console.log(err));
//   });
// });
//how to specify a fetch is a get request

// async function getUserAsync(name)
// {
//   let response = await fetch(`https://api.github.com/users/${name}`);
//   let data = await response.json()
//   return data;
// }
