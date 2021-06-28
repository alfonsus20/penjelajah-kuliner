import UrlParser from '../../routes/url-parser';
import TheRestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const detail = {
  async render() {
    return `
        <section id='detail'>
            <h1>Halaman detail</h1>
            <div id='restaurant'>

            </div>
        </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantSource.restaurantDetail(url.id);
    const detailContainer = document.querySelector('#restaurant');
    detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {},
    });
  },
};

export default detail;
