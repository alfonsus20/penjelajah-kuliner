import LikeButtonPresenter from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestauranIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestauranIdb,
    restaurant,
  });
};

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

export { createLikeButtonPresenterWithRestaurant, addLikeButtonContainer };
