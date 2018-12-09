import { MDCTopAppBar } from "@material/top-app-bar/index";
import "confetti-js/dist/index";
import "../css/main.scss";

// Instantiation
const topAppBarElement = document.querySelector(".mdc-top-app-bar");
const topAppBar = new MDCTopAppBar(topAppBarElement);

const confetti = new ConfettiGenerator();
confetti.render();

console.log("Welcome to the 1982's website.")
console.log("Website developed by 'a pleasant view'");
