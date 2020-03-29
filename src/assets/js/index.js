import "../css/main.scss";
import ConfettiGenerator from "confetti-js";

// Instantiation
var confettiSettings = {
  size: 1.8,
  colors: [[255, 113, 206], [1, 205, 254], [185, 103, 255], [255, 251, 150]]
};
const confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

console.log("Welcome to the 1982's website.\n Website developed by 'a pleasant view' \n - https://apleasantview.com");
