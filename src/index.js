import "./style.css"
import home from "./home.js"
import menu from "./menu.js"
import contact from "./contact.js"

console.log("Successfully connected");

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");

contact()

homeBtn.addEventListener("click", home);
menuBtn.addEventListener("click", menu);
contactBtn.addEventListener("click", contact);