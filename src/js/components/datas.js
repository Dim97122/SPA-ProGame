const TitleGame = (name, description, rating, rating_top, ratings_count) => {
  return `
    <div class="d-flex justify-content-between">
      <div class="white-title-emphasis">
        <div class="big">
           ${name}
        </div>
      </div>
      <div class="red-emphasis d-flex justify-content-between">
        <div class="mr-3">
          ${rating} / ${rating_top}
        </div>
        <div class="">
           -
        </div>
        <div class="ml-3">
           ${ratings_count} votes
        </div>
      </div>
    </div>
    <div class="mb-2">
       ${description}
    </div>
  `;
}


const InfosGame = (game) => {
  let developers = "";
  game.developers.forEach((developer) => {
    developers += developer.name;
    if (game.developers.length > 1) {
      developers += ", "
    }
  });
  let platforms = "";
  game.platforms.forEach((platform) => {
    platforms += platform.platform.name;
    if (game.platforms.length > 1) {
      platforms += ", "
    }
  });
  let publishers = "";
  game.publishers.forEach((publisher) => {
    publishers += publisher.name;
    if (game.publishers.length > 1) {
      publishers += ", "
    }
  });
  let genres = "";
  game.genres.forEach((genre) => {
    genres += genre.name;
    if (game.genres.length > 1) {
      genres += ", "
    }
  });
  let tags = "";
  game.tags.forEach((tag) => {
    tags += tag.name;
    if (game.tags.length > 1) {
      tags += ", "
    }
  });
  let stores = "";
  game.stores.forEach((store) => {
    stores += `
      <a href="${store.store.domain}">${store.store.name}</a>
    `;
  });

  return `
    <div class="mt-3 mb-5">
      <div class="d-flex">
        <div class="w-25">
          <div class="white-title-emphasis">
            <div class="medium">
              Release Date
            </div>
          </div>
          <div class="">
            ${game.released}
          </div>
        </div>
        <div class="w-25">
          <div class="white-title-emphasis">
            <div class="medium">
              Developer
            </div>
          </div>
          <div class="">
            ${developers}
          </div>
        </div>
        <div class="w-25">
          <div class="white-title-emphasis">
            <div class="medium">
              Platform
            </div>
          </div>
          <div class="">
            ${platforms}
          </div>
        </div>
        <div class="w-25">
          <div class="white-title-emphasis">
            <div class="medium">
              Publisher
            </div>
          </div>
          <div class="">
            ${publishers}
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div class="w-50">
          <div class="white-title-emphasis">
            <div class="medium">
              Genres
            </div>
          </div>
          <div class="">
            ${genres}
          </div>
        </div>
        <div class="w-50">
          <div class="white-title-emphasis">
            <div class="medium">
              Tags
            </div>
          </div>
          <div class="">
            ${tags}
          </div>
        </div>
      </div>
    </div>
    <div class="my-2">
      <div class="red-emphasis">
        BUY
      </div>
      <div class="">
        ${stores}
      </div>
    </div>
  `;
}

export { TitleGame, InfosGame }
