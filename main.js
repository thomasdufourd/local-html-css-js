window.onload = addElement;

function addElement() {
  // create a new div element and give it some content 
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode("Hi there ***** greetings!");
  // add the text node to the newly created div.
  newDiv.appendChild(newContent);
  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  // document.body.insertBefore(newDiv, currentDiv);
  currentDiv.appendChild(newDiv);
}

console.log('hello from my codepen.');
