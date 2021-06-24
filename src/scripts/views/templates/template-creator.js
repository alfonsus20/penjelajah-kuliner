import CONFIG from '../../globals/config';

const createRestaurantCardTemplate = (restaurant) => {
  const { city, pictureId, rating, name, description } = restaurant;
  return `
     <div class="card">
      <div class="card__image">
          <span>${city}</span>
          <img src='${CONFIG.BASE_IMAGE_URL}${pictureId}' alt='restaurant'>
      </div>
      <div class="card__body">
        <p>Rating : ${rating} <i class="fas fa-star" style='color:orange'></i></p>
        <h3><a href='/#/detail/${restaurant.id}'>${name}</a></h3>
        <p>${description}</p>
      </div>
    </div>`;
};

const createRestaurantDetailTemplate = (restaurant) => {
  const { city, pictureId, rating, name, menus, address, customerReviews } =
    restaurant;
  const { foods, drinks } = menus;
  const foodsFormatted = foods.map((food) => `<li>${food.name}</li>`).join(' ');
  const drinksFormatted = drinks
    .map((drink) => `<li>${drink.name}</li>`)
    .join(' ');
  /* eslint-disable comma-dangle */
  const reviewsFormatted = customerReviews
    .map(
      (review) => `
    <div>
      <p>${review.name}</p>
      <time>${review.date}</time>
      <p>${review.review}</p>
    </div>
  `
    )
    .join(' ');

  return `
    <div>
      <h3>${city}</h3>
      <img src='${CONFIG.BASE_IMAGE_URL}${pictureId}' alt = '${name}'/>
      <p>${name}</p>
      <p>${address}</p>
      <p>${rating}</p>
      <div class='menu'>
        <h4 class='menu__title'>Menu</h4>
        <h5 class='menu__title'>Menu Makanan</h5>
        <ul class='menu__foods' id='menu-foods'>
          ${foodsFormatted}
        </ul>
        <h5 class='menu__title'>Menu Minuman</h5>
        <ul class='menu__drinks' id='menu-drinks'>
          ${drinksFormatted}
        </ul>
      </div>
      <div class='reviews'>
        <h4 class='reviews__title'>Review</h4>
        <div class='reviews' id='reviews'>
          ${reviewsFormatted}
        </div>
      </div>
    </ul>
  `;
};

export { createRestaurantCardTemplate, createRestaurantDetailTemplate };
