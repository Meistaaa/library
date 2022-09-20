import Tooltip from "./ninja-ui/styles/tooltip";
import dropDown from "./ninja-ui/styles/dropdown.js";
import "./ninja-ui/styles/tooltip.css";
import "./ninja-ui/styles/dropdown.css";
const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

const dropdown = new dropDown(document.querySelector(".dropdown-btn"));
dropdown.init();
