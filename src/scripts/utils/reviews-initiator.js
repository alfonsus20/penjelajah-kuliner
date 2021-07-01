import TheRestaurantSource from '../data/restaurant-source';

const ReviewInitiator = {
  init({ reviewsContainer, reviews, postReviewButton, restaurant }) {
    this._reviewsContainer = reviewsContainer;
    this._reviews = reviews;
    this._postReviewButton = postReviewButton;
    this._restaurant = restaurant;
    this.renderReviews(this._reviews);
  },
  renderReviews(reviews) {
    /* eslint-disable comma-dangle */
    const reviewsFormatted = reviews
      .map(
        (review) => `
    <div class='review'>
      <div class='review__photo'>
        <img src='/images/no-user.jpg' alt='${review.name}'/>
      </div>
      <div class='review__inner'>
        <div class='review__reviewer'>
          <p class='review__reviewer__name'>${review.name}</p>
          <time class='review__reviewer__date'>${review.date}</time>
        </div>
        <p class='review__text'>${review.review}</p>
      </div>
    </div>
  `
      )
      .join(' ');
    this._reviewsContainer.innerHTML = reviewsFormatted;
    this._postReviewButton.addEventListener('click', async (e) => {
      e.preventDefault();
      const nama = document.querySelector('#nama').value;
      const komentar = document.querySelector('#komentar').value;
      await this.createReview({
        idRestaurant: this._restaurant.id,
        nama,
        komentar,
      });
    });
  },
  async createReview(review) {
    const reviews = await TheRestaurantSource.reviewRestaurant(review);
    this.renderReviews(reviews);
  },
};

export default ReviewInitiator;
