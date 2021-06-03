const table = document.getElementById("studioTable");

fetch("https://ghibliapi.herokuapp.com/films")
  .then((res) => res.json())
  .then(function (data) {
    console.log(data);
    displayResults(data);
  })
  .catch((err) => console.log(err));

function displayResults(data) {
  for (arr of data) {
    let newRow = document.createElement("tr");
    let columnTitle = document.createElement("td");
    let columnDescription = document.createElement("td");
    let columnDirector = document.createElement("td");
    columnTitle.innerHTML = arr.title;
    columnDescription.innerHTML = arr.description;
    columnDirector.innerHTML = arr.director;
    columnDirector.setAttribute("class", "darkCol");

    table.appendChild(newRow);
    newRow.appendChild(columnTitle);
    newRow.appendChild(columnDescription);
    newRow.appendChild(columnDirector);
  }
}

// ------ OR USE MAP ------

// function displayResults(data) {
//   data.map((film) => {
//     let newRow = document.createElement("tr");
//     let columnTitle = document.createElement("td");
//     let columnDescription = document.createElement("td");
//     let columnDirector = document.createElement("td");
//     columnTitle.innerHTML = film.title;
//     columnDescription.innerHTML = film.description;
//     columnDirector.innerHTML = film.director;
//     columnDirector.setAttribute("class", "darkCol");

//     table.appendChild(newRow);
//     newRow.appendChild(columnTitle);
//     newRow.appendChild(columnDescription);
//     newRow.appendChild(columnDirector);
//   });
// }
