import TheRestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantCardSkeletonTemplate,
  createRestaurantCardTemplate,
} from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
      <section id='landingPage'>
        <picture>
            <source media = "(max-width: 480px)" srcset='./images/heros/hero-image-small.jpg'>
            <img src='./images/heros/hero-image-large.jpg' alt='hero'>
        </picture>
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
    const restaurantsContainer = document.querySelector('#card-container');
    [...Array(12).keys()].forEach(() => {
      restaurantsContainer.innerHTML += createRestaurantCardSkeletonTemplate();
    });
    const restaurants = await TheRestaurantSource.restaurantList();
    restaurantsContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantCardTemplate(restaurant);
    });
  },
};

export default RestaurantList;
