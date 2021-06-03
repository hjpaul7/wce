function fetchCovid() {
  fetch("https://api.covid19api.com/summary")
    .then((res) => res.json())
    .then(function (json) {
      console.log(json);
      displayResults(json);
    })
    .catch((err) => console.log(err));
}

const summaryContainer = document.getElementById("summaryContainer");
const getSummary = document.querySelector("h4");
const section = document.getElementById("searchResults");
const getCovidButton = document.getElementById("getCovidButton");

// Table
const covidTable = document.querySelector("table");
const newConfirmed = document.getElementById("newConfirmed");
const totalConfirmed = document.getElementById("totalConfirmed");
const newDeaths = document.getElementById("newDeaths");
const totalDeaths = document.getElementById("totalDeaths");
const newRecovered = document.getElementById("newRecovered");
const totalRecovered = document.getElementById("totalRecovered");

getCovidButton.addEventListener("click", fetchCovid);

function displayResults(json) {
  // summaryContainer.removeChild(getSummary);
  // summaryContainer.removeChild(getCovidButton);
  summaryContainer.remove();
  covidTable.style.display = "block";
  // let deaths = document.createElement("p");
  // deaths.innerText = `New Deaths: ${json.Global.NewDeaths}`;
  newConfirmed.innerText = json.Global.NewConfirmed;
  totalConfirmed.innerText = json.Global.TotalConfirmed;
  newDeaths.innerText = json.Global.NewDeaths;
  totalDeaths.innerText = json.Global.TotalDeaths;
  newRecovered.innerText = json.Global.NewRecovered;
  totalRecovered.innerText = json.Global.TotalRecovered;
  // section.appendChild(deaths);
}
