const form = document.querySelector(".who");
const input = form.querySelector("input");
const greeting = document.querySelector(".name");



const USER_LS = "currentUser", SHOWING_CN = "name";

function saveName(text) { 
  localStorage.setItem(USER_LS, text);
}

function handleSubmint(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmint)
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
  document.getElementById("greeting").style.display = "none";
  

}
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init(){
  loadName();
}

init();