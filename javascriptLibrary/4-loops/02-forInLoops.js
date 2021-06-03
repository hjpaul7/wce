let name = "sPONGEBOB";
let cap;
for (let letter in name) {
  if (letter == 0) {
    cap = name[letter].toUpperCase();
  } else {
    cap += name[letter].toLowerCase();
  }
}
console.log(cap);
