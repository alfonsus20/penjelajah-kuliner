import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantCardTemplate } from '../templates/template-creator';

const favorite = {
  async render() {
    return `
        <section id='restaurants'>
            <h1>Favorite Food</h1>
            <div class="card-container" id="card-container">
                
            </div>
        </section>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#card-container');
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantCardTemplate(restaurant);
    });
  },
};

export default favorite;
