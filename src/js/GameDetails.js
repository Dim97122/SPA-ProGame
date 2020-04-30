import { HeroGame, Trailer, Screenshots } from "./components/content_images";
import { TitleGame, InfosGame } from "./components/datas";

const GameDetails = (argument) => {
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");

    let articleContent = "";

    const fetchGame = (url, argument) => {
      let finalURL = url + argument;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          let { name, released, description, website, background_image, rating, rating_top, ratings_count } = response;
          console.log(response);

          let articleDOM = document.querySelector(".page-detail .article");

          articleDOM.querySelector("div.HeroGame").innerHTML += HeroGame(response);

          articleDOM.querySelector("div.TitleGame").innerHTML = TitleGame(name, description, rating, rating_top, ratings_count);

          articleDOM.querySelector("div.infos").innerHTML = InfosGame(response);

          articleDOM.querySelector("div.Trailer").innerHTML = Trailer(response);

          articleDOM.querySelector("div.Screenshots").innerHTML = Screenshots(response);

        });
    };

    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
  };

  const render = () => {
    document.getElementsByClassName('presentation')[0].innerHTML = "";
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
          <div class="HeroGame"></div>
          <div class="TitleGame"></div>
          <div class="infos"></div>
          <div class="Trailer"></div>
          <div class="Screenshots"></div>
          <p class="description"></p>
        </div>
      </section>
    `;

    preparePage();
  };

  render();
};

export { GameDetails }
