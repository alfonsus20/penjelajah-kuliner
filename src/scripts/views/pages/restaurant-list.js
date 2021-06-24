import TheRestaurantSource from '../../data/restaurant-source';
import { createRestaurantCardTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
      <section id='landingPage'>
        <div>
          <h1>Penjelajah Kuliner</h1>
          <p>Website untuk Anda Para Penikmat Kuliner Nusantara</p>
        </div>
      </section>
      <section id="restaurants">
        <h2>Explore Restaurant</h2>
        <div class="card-container" id="card-container"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantSource.restaurantList();
    const restaurantsContainer = document.querySelector('#card-container');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantCardTemplate(restaurant);
    });
  },
};

export default RestaurantList;
