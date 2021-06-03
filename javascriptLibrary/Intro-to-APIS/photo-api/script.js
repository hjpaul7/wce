const imageButton = document.getElementById("imageButton");
const displayButton = document.getElementById("displayButton");
const showImage = document.getElementById("showImage");

function fetchImage() {
  fetch("https://picsum.photos/v2/list")
    .then((res) => res.json())
    // .then((data) => displayImages(data))
    .then(function (data) {
      console.log(data);
      displayImages(data);
    })
    .catch((err) => console.log(err));
}
// fetchImage();
imageButton.addEventListener("click", fetchImage);
displayButton.addEventListener("click", displayImages);

function displayImages(data) {
  for (let p of data) {
    console.log(p.url);
    const image = document.createElement("img");
    image.style.height = "200px";
    image.style.width = "300px";
    image.src = p.download_url;
    showImage.appendChild(image);
  }
}
