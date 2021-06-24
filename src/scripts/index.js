import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.scss';
import App from './views/app';

const app = new App({
  button: document.querySelector('#burger'),
  drawer: document.querySelector('#navlist'),
  content: document.querySelector('#mainContent'),
});
// import data from '../DATA.json';

// const { restaurants } = data;
// const cardContainer = document.getElementById('card-container');

// restaurants.forEach((restaurant) => {
//   const { city, pictureId, rating, name, description } = restaurant;
//   cardContainer.innerHTML += `
//    <div class="card">
//     <div class="card__image">
//         <span>${city}</span>
//         <img src='${pictureId}' alt='restaurant'>
//     </div>
//     <div class="card__body">
//       <p>Rating : ${rating} <i class="fas fa-star" style='color:orange'></i></p>
//       <h3>${name}</h3>
//       <p>${description}</p>
//     </div>
//   </div>`;
// });
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
