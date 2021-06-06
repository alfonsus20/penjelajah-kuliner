import "regenerator-runtime"; /* for async await transpile */
import "../styles/style.scss";
import data from "../DATA.json";

let { restaurants } = data;
let cardContainer = document.getElementById("card-container");

restaurants.forEach((restaurant) => {
  let { city, pictureId, rating, name, description } = restaurant;
  cardContainer.innerHTML += `
   <div class="card">
    <div class="card__image">
        <span>${city}</span>
        <img src='${pictureId}' alt=''>
    </div>
    <div class="card__body">
      <p>Rating : ${rating} <i class="fas fa-star" style='color:orange'></i></p>
      <h3>${name}</h3>
      <p>${description}</p>
    </div>
  </div>`;
});

const burger = document.getElementById("burger");

burger.addEventListener("click", () => {
  const navlist = document.getElementById("navlist");
  if (navlist.classList.contains("open")) {
    navlist.classList.remove("open");
  } else {
    navlist.classList.add("open");
  }
});