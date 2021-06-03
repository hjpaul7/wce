const baseURL = "https://ghibliapi.herokuapp.com/people";
let url;

const submitBtn = document.querySelector(".submit");
const section = document.querySelector(".searchResults");

submitBtn.addEventListener("click", fetchResults);

searchResults.display.none;

function fetchResults(e) {
  e.preventDefault();
  console.log(e);
  url = `${baseURL}?&limit=3`;
  console.log(url);

  fetch(url)
    .then(function (results) {
      return results.json();
    })
    .then(function (json) {
      displayResults(json);
    });
}

function displayResults(json) {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
  console.log("DisplayResults", json);
  let people = json;

  if (people.length === 0) {
    console.log("No Results");
  } else {
    for (let i = 0; i < people.length; i++) {
      console.log(i);

      let name = document.createElement("article");
      let heading = document.createElement("p");
      let ageInfo = document.createElement("p");
      let eyecolorInfo = document.createElement("p");
      let current = people[i];
      name.textContent = "Name: " + current.name;
      heading.innerText = "Gender: " + current.gender;
      ageInfo.innerText = "Age: " + current.age;
      eyecolorInfo.innerText = "Eye Color: " + current.eye_color;

      name.appendChild(heading);
      heading.appendChild(ageInfo);
      heading.appendChild(eyecolorInfo);
      section.appendChild(name);
    }
  }
}
