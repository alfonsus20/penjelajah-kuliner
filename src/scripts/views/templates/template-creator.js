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
        <h3>${name}</h3>
        <p>${description}</p>
      </div>
    </div>`;
};

// const createRestaurantDetailTemplate = (restaurant) => {
//   return null;
// };

/* eslint-disable import/prefer-default-export */
export { createRestaurantCardTemplate };
