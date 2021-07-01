import UrlParser from '../../routes/url-parser';
import TheRestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import ReviewInitiator from '../../utils/reviews-initiator';

const detail = {
  async render() {
    return `
        <section id='detail'>
            <div id='restaurant'>

            </div>
            <form id='reviewRestaurant'>
              <div class='input-container'>
                <label for='nama'>Nama</label>
                <input type='text' name='nama' id='nama' placeholder='Nama Anda ...'/>
              </div>
              <div class='input-container'>
                <label for='nama'>Komentar</label>
                <textarea name='komentar' id='komentar' placeholder='Berikan Komentar Anda ...'></textarea>
              </div>
              <button type='submit' id='submitKomentar'>Kirim</button>
            </form>
            <div id='likeButtonContainer'>
            
            </div>
        </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantSource.restaurantDetail(url.id);
    const detailContainer = document.querySelector('#restaurant');
    detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    ReviewInitiator.init({
      reviewsContainer: document.querySelector('#reviews'),
      reviews: restaurant.customerReviews,
      postReviewButton: document.querySelector('#submitKomentar'),
      restaurant,
    });
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        name: restaurant.name,
        description: restaurant.description,
      },
    });
  },
};

export default detail;
