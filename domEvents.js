// *** DOM EVENTS ***
// DOM Events are actions that occur as a response to user inputs/actions

// EVENT PROPERTY
/*
Syntax Example

selectedElement.eventproperty = function (){
  CODE TO BE RUN GOES HERE;
};
*/
// NOTE: Event Properties are lowercase NOT camelCase

// Example 1
const btn1 = document.getElementById(`one`);
// The alert in the anonymous declaration function pops up on the webpage when the button is clicked (AKA When the onclick DOM Event occurs)
btn1.onclick = function (){
  alert(`You clicked button one!`);
};

// Example 2
const btn2 = document.querySelector(`#two`);
// The background class is added to the button when the ondblclick (AKA On Double Click) DOM Event occurs on the button (NOTE: Using an anonymous arrow function in this example)
btn2.ondblclick = () => {
  btn2.classList.add(`background`);
};

// ADD EVENT LISTENER
/*
Syntax Example

selectedElement.addEventListener(`event`, function(){
  CODE TO BE RUN GOES HERE;
});
*/
// NOTE: Events for addEventListener are lowercase NOT camelCase

// Example 1
const btn3 = document.querySelector(`#three`);
// The text-color class is added to the button when the `click` DOM Event occurs on the button (NOTE: Using an anonymous declaration function in this example)
btn3.addEventListener(`click`, function(){
  btn3.classList.add(`text-color`);
});

// Example 2
const h1 = document.querySelector(`h1`);
const p = document.querySelector(`p`);
// The background and text-color classes are added to the p element when the `mouseup` DOM Event occurs on the h1 (NOTE: Using an anonymous arrow function in this example)
// The `mouseup` event is when the mouse click is released
h1.addEventListener(`mouseup`, () => {
  p.classList.toggle(`background`);
  p.classList.toggle(`text-color`);
});

// Example 3 (Using the h1 from Example 2)
// The background and text-color classes are added to the h1 element when the `mouseleave` DOM Event occurs on the h1
// The `mouseleave` event is when the user stops hovering over an element (AKA Moves mouse/cursor off of an element)
h1.addEventListener(`mouseleave`, function(){
  h1.classList.toggle(`background`);
  h1.classList.toggle(`text-color`);
});

// Example 4
// Creating a new button and adding it to the bottom of the webpage
const newBtn = document.createElement(`button`);
newBtn.innerText = `DO NOT PRESS THIS BUTTON!!!`;
const body = document.querySelector(`body`);
body.append(newBtn);

// The body element is removed from the document/webpage when the `click` DOM Event occurs on the newBtn (AKA The `DO NOT PRESS THIS BUTTON!!!` button)
// NOTE: All the elements are removed because they are inside the body element
newBtn.addEventListener(`click`, () => {
  body.remove();
});

// Example 5
const h2 = document.querySelector(`h2`);
// addEventListener allows for multiple functions to be run for the same event (`click` in this example) on a single element (h2 in this example)
// NOTE: This cannot be done using Event Property
h2.addEventListener(`click`, function(){
  alert(`You clicked the h2. This is the first addEventListener`);
});
h2.addEventListener(`click`, function(){
  alert(`You clicked the h2. This is the second addEventListener`);
});

// h2.onclick = function(){
//   alert(`You clicked the h2. This is the first addEventListener`);
// };
// h2.onclick = function(){
//   alert(`You clicked the h2. This is the second addEventListener`);
// };

// DOM EVENTS WITH FORMS
// NOTE: Using addEventListener for these examples. However, Event Property can also be used.

// Example 1
const userForm = document.querySelector(`form`);
// Alert displays when the user clicks on the submit input (AKA Submits the form)
userForm.addEventListener(`submit`, () => {
  alert(`The form has been submitted`);
});

// Example 2 (Using userForm from example 1)
// "p" is the parameter in the anonymous arrow function
userForm.addEventListener(`submit`, p => {
  // preventDefault stops the form from submitting so the values in the inputs can be accessed/used
  p.preventDefault();

  // Displays the values entered by the user in the console by accessing the values in the userForm object (NOTE: Using the values set for the "name" attributes in the index.html file to access the values)
  console.dir(userForm);
  console.log(userForm.elements.username.value);
  console.log(userForm.elements.email.value);

  // Sets the values entered for each input to the "enteredUsername" and "enteredEmail" variables by accessing the values in the userForm object
  // NOTE: Setting the values to variables so the variables names can be used in the final part of the function
  const enteredUsername = userForm.elements.username.value;
  const enteredEmail = userForm.elements.email.value;

  // Using the values entered in the form and displays them on the webpage/document as a new p element in the div
  const div = document.querySelector(`div`);
  const newUser = document.createElement(`p`);
  newUser.innerText = `${enteredUsername}, ${enteredEmail}`;
  div.append(newUser);

  // Sets the values for the inputs back to empty strings (AKA Clears out the inputs)
  userForm.elements.username.value = ``;
  userForm.elements.email.value = ``;
});