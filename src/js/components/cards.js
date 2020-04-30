var platformsList = [];
var pc_ids = [4];
var playstation_ids = [18, 16, 15, 27, 19, 17];
var xbox_ids = [1, 14, 80];
var ios_ids = [3];
var android_ids = [21];
var nintendo_ids = [7, 8, 9, 13, 10, 11, 105, 83, 24, 43, 26, 79, 49];

const GameCard = (name, image_url, platforms, id) => {
  let finalPlatforms = "";
  platforms.forEach((platform) => {
    if (pc_ids.includes(platform.platform.id)) {
      finalPlatforms += `<i class="fab fa-windows"></i>,`
    }
    if (playstation_ids.includes(platform.platform.id)) {
      finalPlatforms += `<i class="fab fa-playstation"></i>,`
    }
    if (playstation_ids.includes(platform.platform.id)) {
      finalPlatforms += `<i class="fab fa-playstation"></i>,`
    }
    if (xbox_ids.includes(platform.platform.id)) {
      finalPlatforms += `<i class="fab fa-xbox"></i>,`;
    }
    if (nintendo_ids.includes(platform.platform.id)) {
      finalPlatforms += `<i class="fas fa-gamepad"></i>,`;
    }
  });
  finalPlatforms = Array.from(new Set(finalPlatforms.split(','))).toString();

  return `
    <div class="card cardGame col-lg-3 mx-1 my-2 px-0">
      <img class="card-img-top h-75" src="${image_url}" alt="">
      <div class="card-body h-50">
        <div class="gameTitle">${name}</div>
        <a href="#gamedetails/${id}" class="stretched-link"></a>
        <div class="platforms d-flex justify-content-around align-items-center">
          ${finalPlatforms}
        </div>
      </div>
    </div>
  `;
  document.querySelector('.platforms').innerHTML = finalPlatforms
};

export { GameCard }
