import '@fortawesome/fontawesome-free/js/all.js';
import "../sass/style.scss";

import { routes } from "./routes";

let pageArgument;

const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";

  var pageContent = document.getElementById("pageContent");
  routes[path[0]](pageArgument);
  return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());

/////////////// MODULE DE RECHERCHE ///////////////////////////////
const getGame = () => {
  let gameName = document.getElementsByClassName('form-control')[0].value;
  window.location.hash = `#gamelist/${gameName}`;
}
// const search_input = document.getElementsByClassName('form-control')[0]
document.getElementsByClassName('form-control')[0].addEventListener("keydown", getGame)
/////////////// MODULE DE RECHERCHE ///////////////////////////////
