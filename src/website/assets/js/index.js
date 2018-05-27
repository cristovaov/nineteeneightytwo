import "../css/main.css";

function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  function init() {
    console.log("Welcome to the 1982's website.")
  }

  ready(init);