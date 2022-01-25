// const { default: axios } = require("axios");
// app.use(cors());

window.addEventListener("load",  (event) => {

    //selector shows which button id will be selected
    const scrape = document.querySelector("#film")
    scrape.addEventListener("click", async () => {
        //awaits for the fetched src to be called upon
        fetch("http://localhost:4200/film")
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
              </h3><br>` +
              `<a href = "${article.url}">Event Link</a>
              </div><br><br>`;
            scrape.insertAdjacentHTML("beforeend", eventData);
          });
        })
    })
})
       