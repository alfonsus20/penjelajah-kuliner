import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantSource {
  static async restaurantList() {
    const res = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const resJson = await res.json();
    return resJson.restaurants;
  }

  static async restaurantDetail(id) {
    const res = await fetch(API_ENDPOINT.DETAIL(id));
    const resJson = await res.json();
    return resJson.restaurant;
  }

  static async reviewRestaurant({ idRestaurant, nama, komentar }) {
    try {
      const res = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': '12345',
        },
        body: JSON.stringify({
          id: idRestaurant,
          name: nama,
          review: komentar,
        }),
      });
      const resJson = await res.json();
      return resJson.customerReviews;
    } catch (e) {
      /* eslint-disable no-console */
      console.log(e);
      return [];
    }
  }
}

export default TheRestaurantSource;
