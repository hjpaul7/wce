function myName(fName) {
  return fName;
}

let myNameIs = myName("Hustin");
console.log(myNameIs);

function hello() {
  let a = "A";
  let b = "B";
  let c = "C";
  let abc = `the letters are ${a} ${b} ${c}`;
  return abc;
}
let string = hello();
console.log(string);

// BLock body arrow function (needs a return unlike a conceise body arrow function)
let myName = (fName) => {
  return fName;
};
let capture = myName("Hustin");
console.log(capture);

// Conceise body function (will return automatically)
let name = (fName) => fName;
let capture = name("Hustin");
console.log(capture);
