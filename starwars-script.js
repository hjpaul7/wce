const starWars = async () => {
  await fetch("https://swapi.dev/api/people/1")
    .then((res) => console.log(res.json()))
    .then((data) => console.log(data));
  console.log("this should wait");
};

starWars();
