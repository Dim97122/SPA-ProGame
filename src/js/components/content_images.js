 const HeroGame = (game) => {
   return `
     <div class="jumbotron jumbotron-fluid hero-container" style="background-image: url(${game.background_image}); background-size: cover; background-position: top; background-repeat: no-repeat; position:relative">
        <div class="website_button px-3 py-1 d-flex justify-content-between align-items-center">
          <a href="${game.website}" class="">Visit Website</a>
          <i class="fas fa-caret-right ml-3"></i>
        </div>
      </div>
  `;
 }


const Trailer = (game) => {
  return `
    <div class="my-3">
      <div class="red-emphasis">
        TRAILER
      </div>
      <div class="w-75 mx-auto my-3">
        <video controls width="100%">
          <source src="${game.clip.clip}">
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    </div>
  `;
}

const Screenshots = (game) => {
  var screenshots = "";
  fetch(`https://api.rawg.io/api/games/${game.id}/screenshots`)
    .then((response) => response.json())
    .then((response) => {response.results.forEach((screenshot) => {
      console.log(response.results);
      console.log(screenshot.image);
        screenshots += `<img src="${screenshot.image}">`
      });
  });

  return `
    <div class="my-3">
      <div class="red-emphasis">
        SCREENSHOTS
      </div>
      <div class="w-75 mx-auto my-3">
      </div>
      ${screenshots}
    </div>
  `;
}

export { HeroGame, Trailer, Screenshots }
