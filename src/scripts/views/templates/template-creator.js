import CONFIG from '../../globals/config';

const createRestaurantCardTemplate = (restaurant) => {
  const { city, pictureId, rating, name, description } = restaurant;
  return `
     <div class="card">
      <div class="card__image">
          <span>${city}</span>
          <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${pictureId}" alt="${name}"/>
      </div>
      <div class="card__body">
        <p>Rating : ${rating} <i class="fas fa-star" style='color:orange'></i></p>
        <h3 class="restaurant__name"><a href='/#/detail/${restaurant.id}'>${name}</a></h3>
        <p>${description}</p>
      </div>
    </div>`;
};

const createRestaurantDetailTemplate = (restaurant) => {
  const { city, pictureId, rating, name, menus, address, description } =
    restaurant;
  const { foods, drinks } = menus;
  const foodsFormatted = foods.map((food) => `<dd>${food.name}</dd>`).join(' ');
  const drinksFormatted = drinks
    .map((drink) => `<dd>${drink.name}</dd>`)
    .join(' ');

  return `
    <div id='restaurant-detail'>
      <div class='information'>
        <div class='information__image'>
            <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${pictureId}" alt="${name}"/>
        </div>
        <div class='information__detail'>
            <h3>${name}</h3>
            <p><i class="fas fa-map-marker-alt" style='color:red'></i>&nbsp;&nbsp;${address}, ${city}</p>
            <p><i class="fas fa-star" style='color:orange'></i>&nbsp;&nbsp;${rating}</p>    
            <p>${description}</p>
        </div>
      </div>
      <div class='menu'>
        <h3 class='menu__title'>Menu</h3>
        <div class='menu__detail'>
          <div class='menu__detail__variant'>
            <h4 class='menu__detail__variant__title'>Menu Makanan</h4>
            <dl class='menu__detail__variant__foods' id='menu-foods'>
              ${foodsFormatted}
            </dl>
          </div>
          <div class='menu__detail__variant'>
            <h4 class='menu__detail__variant__title'>Menu Minuman</h4>
            <dl class='menu__detail__variant__drinks' id='menu-drinks'>
              ${drinksFormatted}
            </dl>
          </div>
        </div>
      </div>
      <div class='reviews'>
        <h3 class='reviews__title'>Review</h3>
        <div class='reviews' id='reviews'>
        </div>
      </div>
    </div>
  `;
};

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createUnlikeButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  createRestaurantCardTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
