// let fetchEvents = (content, path) => {
//   fetch(`http://localhost:4200/${path}`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       data.forEach((article) => {
//         const eventData =
//           `<div><h3>
//           ${article.title}
//           </h3>` +
//           `<div><h3>
//           ${article.date}
//           </h3>` +
//           `<div><h3>
//           ${article.location}
//           </h3><br>` +
//           `<a href = "${article.url}">Event Link</a>
//           </div><br><br>`;
//         content.insertAdjacentHTML("beforeend", eventData);
//       });
//     });
// };
// module.exports = fetchEvents;
