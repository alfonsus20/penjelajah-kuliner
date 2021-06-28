import FavoriteMovieIdb from '../data/favorite-restaurant-idb';
import {
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, movie }) {
    this._likeButtonContainer = likeButtonContainer;
    this._movie = movie;

    await this._renderButton();
  },
  async _renderButton() {
    const { id } = this._movie;

    if (await this._isMovieExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },
  async _isMovieExist(id) {
    const movie = await FavoriteMovieIdb.getRestaurant(id);
    return !!movie;
  },
  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {});
  },
  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
