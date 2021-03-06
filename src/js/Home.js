import { GameCard } from "./components/cards";

const Home = (argument = "") => {
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
    fetchList("https://api.rawg.io/api/games?dates=2020-01-01,2021-10-10&ordering=-added", cleanedArgument);
  };

  const render = () => {
    document.getElementsByClassName('presentation')[0].innerHTML = "";
    document.getElementsByClassName('presentation')[0].innerHTML += `
      <div class="title">
        Welcome,
      </div>
      The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame, the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies, groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure
    `;
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="games d-flex flex-wrap justify-content-around">...loading</div>
      </section>
    `;
    preparePage();
  };

  render();
};

export { Home }
