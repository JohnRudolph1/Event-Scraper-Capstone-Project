// const { default: axios } = require("axios");
// app.use(cors());

window.addEventListener("load",  (event) => {
  //selector shows which button id will be selected

  const allButton = document.querySelector("#scrape")
   document.querySelector("#music");
   document.querySelector("#community");
   document.querySelector("#film");
   document.querySelector("#tech");
   document.querySelector("#sports");
   document.querySelector("#outdoors");

  allButton.addEventListener("click", async () => {
  //awaits for the fetched src to be called upon

    await fetch("http:localhost:4200/scrape");
    await fetch("http:localhost:4200/music");
    await fetch("http:localhost:4200/community");
    await fetch("http:localhost:4200/film");
    await fetch("http:localhost:4200/tech");
    await fetch("http:localhost:4200/sports");
    await fetch("http:localhost:4200/outoors");
  })

  //once called upon return(render) the response into json format
    .then((response) => {
      return response.json();
    }).then((data) => {
          data.forEach((item) => {
//takes everything fetched and parses it into html layout provided

             const eventItems =
             `<div><h3> 
             ${item.title}
             </h3>` +
             `<div><h3> 
             ${item.date}
             </h3>` +
             `<div><h3> 
             ${item.location}
             </h3>` +
             `<a href = "${item.url}">Event Link</a>
             </div><br><br>`;
             //innerHTML takes the content inside of the event items 
             //and turns it into the html layout i provided
             allButtons.insertAdjacentHTML("beforeend", eventItems);
           })         
          })
        })
    
    
//issues im having are being able to take what has been rendered 
//into html and making it available on my main html page.
//i used the localhost a tag with an href bypassing the button altogether and it works 
//but it is printed in json format instead of html(which makes sense because the local host is pure json)
//i need to either find a way to pare hat info to html or somehow utilze this get fetch
// how to specify a fetch is a get request

//  async function getUserAsync(name)
//  {
//    let response = await fetch(`https:api.github.com/users/${name}`);
//    let data = await response.json()
//    return data;
//  }
