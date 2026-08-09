const card = document.querySelector("#card"); //to select card
const toggleBtn = document.querySelector("#toggle"); //to select card
const userForm = document.querySelector("#userForm"); //to select card
const username = document.querySelector("#username"); //to select card
const message = document.querySelector("#message"); //to select card
const charCount = document.querySelector("#charCount"); //to select card
const submitBtn = document.querySelector("#submit"); //to select card
const form = document.querySelector("#form"); //to select card

// console.log("card=",card);
// const cardTitle = document.querySelector(".card-title"); //it will select first card title only
// const cardTitle = document.querySelectorAll(".card-title"); //it selects two items
// console.log("card=", cardTitle);
//so to uniquely identify item use id instead of class
//or using for loop
// cardTitle.forEach((cardTitle) => {
//     console.log(cardTitle);
// });

const cardTitle = document.querySelector("#cardTitle");
// console.log("card=", cardTitle);
// cardTitle.textContent="Welcome to DOM";//to change text
cardTitle.innerHTML = "<i>Welcome to DOM</i>"; //to change text attributes
//event bubbling-event occurs from child to parent
toggleBtn.addEventListener("click", (e) => {
  e.stopPropagation(); //to stop event bubbling
  userForm.classList.toggle("toggle");
  console.log("toggle clicked");
});

// card.addEventListener("click", (e) => {
//   card.classList.toggle("selected");
//   console.log("card clicked");
// });

username.addEventListener("input", (e) => {
  // console.log(e.target.value);
  let username = e.target.value;
  // charCount.textContent=username;
  charCount.textContent = `${username.length}/10 characters`;
  charCount.style.color = username.length > 10 ? "red" : "green";
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); //to prevent page reloading
  // console.log("clicked");
  console.log(username.value);
  const para=document.createElement('p');
  para.textContent=username.value;
  message.appendChild(para);
});
