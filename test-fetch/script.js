const container = document.getElementById("container");

function sg() {
  fetch("https://ghibliapi.herokuapp.com/people")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayResults(data);
    });
}

sg();

function displayResults(data) {
  data.map((p) => {
    let listItem = document.createElement("p");
    listItem.innerHTML = p.name;
    container.appendChild(listItem);
  });
}
