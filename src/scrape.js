// const { default: axios } = require("axios");
// app.use(cors());

window.addEventListener("load", (event) => {
  //selector shows which button id will be selected
  const scrape = document.querySelector("#scrape");
  const content = document.querySelector(".content");
  scrape.addEventListener("click", async () => {
    //awaits for the fetched src to be called upon
    fetch("http://localhost:4200/scrape")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach((article) => {
          const eventData =
            `<div class="card-deck">
          <div class="card">
            <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaLpFnJh_hsg6HiABzUzAi3wRA4H1yek284srP3xeT61l-61q6j6PGfadBBuGyYqX5VA&usqp=CAU" style="width:200px;height:200px;">` +
            `<div class="card-body">
              <h5 class="card-title">${article.title}</h5>` +
            `<p class="card-text">${article.date}</p>` +
            `<p class="card-text">${article.location}</p>` +
            `<button><a href = "${article.url}">Event Link</a></button>
            </div>
          </div>`;
          content.insertAdjacentHTML("beforeend", eventData);
        });
      });
  });
});
