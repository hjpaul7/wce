/*
    DOCUMENT OBJECT MODEL
        - DOM stands for Document Object Model, and it is what allows our JavaScript to interact with the HTML and CSS of our webpage. The Document Object Model specifies how browsers should create a model of an HTML page and how JavaScript can access and update the contents of a web page while it's in the browser window.
            - The DOM is an object-oriented representation of a web page, which we can then modify with a scripting language like JavaScript. The DOM covers two primary areas: 
                1. Making a model of an HTML page
                    - when the browser loads a webpage, it creates a model of the page in memory
                    - The DOM specifies the way in which the browser should structure the model in what is called the DOM tree
                        - The DOM is called an object model because the DOM tree itself is made up of objects
                            - each object represents a different part of the webpage that is loaded in the browser window
                2. Access and changing tags and data in the HTML page
                    - the DOM provides methods and properties to access and update each object in the model, which in turn updates what the user sees in the browser
            - while working with the DOM tree, we generally access the element we want to work with, and once that element (or elements) have been selected, we can then manipulate them
            ACCESSING:
                COMMON METHODS FOR ACCESSING A SINGLE ELEMENT
                    - getElementById()
                    - querySelector()
                COMMON METHODS FOR ACCESSING MULTIPLE ELEMENTS:
                    - querySelectorAll()
                    - getElementsByClassName()
                    - getElementsByTagName()
            MANIPULATING
                COMMON METHODS FOR WORKING WITH HTML CONTENT
                    - innerHTML
                    - textContent
                    - createElement
                COMMON METHODS FOR WORKING WITH TAG ATTRIBUTES
                    - className / id
                    - setAttribute()
                    - getAttribute()
*/
// 1. TEST
let x = 10;
console.log(x);
// 2. getElementById()
document.getElementById("testParagraph").style.color = "blue";
let testParagraph = document.getElementById("testParagraph");
console.log(testParagraph);
testParagraph.style.color = "red";
// getElementById() grabs the first HTML element with the specified value - so if we have 2 elements with the same ID, it will grab the first one that it comes across
// 3. querySelector() - querySelectorAll() - innerText & innerHTML
console.log(document.querySelector("p.sampleClass"));
let allParagraphs = document.querySelectorAll("p.sampleClass"); // querySelectorAll() returns a nodelist containing all elements that match the specified group of selectors. Nodelist objects are collections of nodes, and nodes are simply just various items in the HTML document itself like tags, text, etc.
console.log(allParagraphs);
allParagraphs[0].innerText = "My text has changed!"; // since querySelectorAll() returns a nodelist (array) of all of the specified elements, we can access a specific indice from that array, and change the value
allParagraphs.forEach((pTag) => {
  // pTag.innerText = 'My text has changed using a forEach() method!';
  // pTag.textContent = 'My text has changed using a forEach() method!';
  pTag.innerHTML = "<i>My text has changed using a forEach() method!</i>";
});
/*
    INNERTEXT vs INNERHTML vs TEXTCONTENT
        - innerText simply references or allows us to change the text of a specified element or elements. Will only return visible text in a 'node'.
        - textContent does the same thing that innerText does, but will return the FULL text of a 'node'.
        - innerHTML allows us to set text, as well as HTML elements. Those HTML elements will be nested inside of the current HTML element that was referenced.
*/
// 3.5 TEXTCONTENT vs INNERTEXT EXAMPLE
console.log(document.getElementById("spanTest").innerText);
console.log(document.getElementById("spanTest").textContent);
// 4. AddEventListener() - click
// console.log(myButton);
// myButton.addEventListener('click', clicked => {
//     console.log(clicked);
//     clicked.target.style.backgroundColor = 'blue';
// })
// myButton.addEventListener('click', function(clicked) {
// })
/*
************
CHALLENGE
************
- make the button toggle between red and blue when clicked
*/
let myButton = document.getElementById("clickThisButton");
myButton.addEventListener("click", (event) => {
  console.log(event);
  if (event.target.style.backgroundColor == "red") {
    event.target.style.backgroundColor = "blue";
  } else {
    event.target.style.backgroundColor = "red";
  }
});
// 5. AddEventListener() - keyup - getElementsByTagName()
let myInput = document.getElementById("nameInput");
console.log(myInput);
myInput.addEventListener("keyup", (ev) => {
  // console.log(ev.target.value);
  // console.log(document.getElementsByTagName('p'));
  let pTags = document.getElementsByTagName("p");
  pTags[0].innerText = "Something Changed!";
  if (ev.target.value == "") {
    pTags[1].innerText = "NOTHING HAS BEEN TYPED!";
  } else {
    pTags[1].innerText = `Everyone, say hello to ${ev.target.value}!`;
  }
});
