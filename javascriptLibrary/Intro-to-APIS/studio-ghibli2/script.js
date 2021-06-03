// const row = document.querySelector(".row");
// const container = document.querySelector(".container");
// // const col = document.getElementById("col-md-4");

// fetch("https://ghibliapi.herokuapp.com/films")
//   .then((res) => res.json())
//   .then(function (data) {
//     console.log(data);
//     displayResults(data);
//   })
//   .catch((err) => console.log(err));

// function displayResults(data) {
//   for (results of data) {
//     // new col
//     let newCol = document.createElement("div");
//     newCol.setAttribute("class", "col-md-4");

//     // card
//     let card = document.createElement("div");
//     card.setAttribute("class", "card");
//     card.style.width = "18rem";

//     // card body
//     let cardBody = document.createElement("div");
//     cardBody.setAttribute("class", "card-body");

//     // card title
//     let cardTitle = document.createElement("h5");
//     cardTitle.setAttribute("class", "card-title");
//     cardTitle.innerHTML = results.title;

//     // card subtitle
//     let cardSubtitle = document.createElement("h6");
//     cardSubtitle.setAttribute("class", "card-subtitle mb-2");
//     cardSubtitle.innerHTML = "-" + results.director;

//     // card text
//     let cardText = document.createElement("p");
//     cardText.setAttribute("class", "card-text");
//     cardText.innerHTML = results.description;

//     // newCol.appendChild(card.appendChild(cardBody));
//     // cardBody.appendChild(cardTitle);
//     // cardBody.appendChild(cardSubtitle);
//     // cardBody.appendChild(cardText);

//     // if (row.appendChild(newCol) > 3) {
//     //   let newRow = document.createElement("div");
//     //   newRow.setAttribute("class", "row");
//     //   newRow.appendChild(newCol);
//     // } else {
//     //   row.appendChild(newCol);
//     // }

//     // if (row.children.length === 3) {
//     //   let newRow = document.createElement("div");
//     //   newRow.setAttribute("class", "row");
//     //   container.appendChild(newRow);
//     //   newRow.appendChild(newCol);
//     // } else {
//     //   container.appendChild(row);
//     //   row.appendChild(newCol);
//     // }

//     for (let col in row) {
//       let newRow = document.createElement("div");
//       newRow.setAttribute("class", "row");
//       container.appendChild(newRow);
//       for (col = 0; col <= 3; col++) {
//         newCol[col].appendChild(card.appendChild(cardBody));
//         cardBody.appendChild(cardTitle);
//         cardBody.appendChild(cardSubtitle);
//         cardBody.appendChild(cardText);
//       }
//     }
//   }
// }

const row = document.querySelector(".row");
const container = document.querySelector(".container");

fetch("https://ghibliapi.herokuapp.com/films")
  .then((res) => res.json())
  .then(function (data) {
    displayResults(data);
  })
  .catch((err) => console.log(err));

function displayResults(data) {
  const cardSelector = document.getElementById("card-selector");
  data.forEach((result) => {
    let card = `
                  <div class="card mb-3">
                    <div class="card-body">
                      <h5 class="card-title">${result.title}</h5>
                      <p class="card-text">${result.description}</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>`;

    let containerDiv = document.createElement("div"); //create the col div
    containerDiv.setAttribute("class", "col-sm-6 col-md-4"); //Add the bootstrap col class as needed
    containerDiv.innerHTML = card;
    cardSelector.appendChild(containerDiv);
  });
}
