const assert = require('assert');

Feature('Liking Restaurants');

Scenario('liking a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant__name a');

  const firstRestaurant = locate('.restaurant__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  // I.seeElement('#likeButton');
  // I.click('#likeButton');

  // I.amOnPage('/#/favorite');
  // I.seeElement('.card');
  // const likedRestaurantName = await I.grabTextFrom('.restaurant__name a');

  // assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('cancel liking a restaurant', ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant__name a');

  const firstRestaurant = locate('.restaurant__name a').first();
  I.click(firstRestaurant);

  // I.seeElement('#likeButton');
  // I.click('#likeButton');
  // I.click('#likeButton');

  // I.amOnPage('/#/favorite');
  // I.dontSeeElement('.card');
});
