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
}

export default TheRestaurantSource;
