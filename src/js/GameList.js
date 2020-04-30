import { GameCard } from "./components/cards";

const GameList = (argument = "") => {
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let games = "";
    let platforms ="";

    const fetchList = (url, argument) => {
      let finalURL = url;
      if (argument) {
        finalURL = url + "?search=" + argument;
      }

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {response.results.forEach((game) => {
            games += GameCard(game.name, game.background_image, game.platforms, game.id);
          });
          document.querySelector(".page-list .games").innerHTML = games;
        })
    };
    fetchList("https://api.rawg.io/api/games", cleanedArgument);
  };

  const render = () => {
    document.getElementsByClassName('presentation')[0].innerHTML = "";
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="games d-flex flex-wrap justify-content-around">...loading</div>
      </section>
    `;
    preparePage();
  };

  render();
};

export { GameList }
