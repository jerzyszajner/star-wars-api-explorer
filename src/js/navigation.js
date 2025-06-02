import fetchFilms from "./fetchFilms";
import fetchPeople from "./fetchPeople";
import fetchPlanets from "./fetchPlanets";
import fetchVehicles from "./fetchVehicles";

// Selectors
const navbar = document.querySelector(".navbar");
const navbarItems = document.querySelectorAll(".navbar__item");
const navbarControlsList = document.querySelector(".navbar__controls-list");
const cardsSection = document.querySelector(".card__section");

// Adjust navbar for mobile
const adjustNavbarForMobile = () => {
  const activeItem = document.querySelector(".navbar__item--active");

  if (window.innerWidth < 600) {
    activeItem.classList.remove("navbar__item--active");
    cardsSection.style.display = "none";
  }
};

adjustNavbarForMobile();

// Handle navbar buttons
const handleNavbarButtons = (e) => {
  const clickedButton = e.target.closest("button");

  if (!clickedButton || !clickedButton.dataset.action) return;
  e.preventDefault();

  const action = clickedButton.dataset.action;

  const parentItem = clickedButton.closest(".navbar__item");
  if (!parentItem) return;

  navbarItems.forEach((item) => {
    item.classList.remove("navbar__item--active");
  });

  parentItem.classList.add("navbar__item--active");
  navbarControlsList.classList.remove("navbar__controls-list--active");

  // Handle actions
  switch (action) {
    case "logo":
      fetchFilms();
      document.querySelector('[data-action="films"]').click();
      cardsSection.style.display = "grid";
      break;
    case "toggle":
      navbarControlsList.classList.add("navbar__controls-list--active");
      setTimeout(() => {
        cardsSection.style.display = "none";
      }, 800);
      break;
    case "films":
      fetchFilms();
      cardsSection.style.display = "grid";
      console.log("Films button clicked");
      break;
    case "people":
      fetchPeople();
      cardsSection.style.display = "grid";
      console.log("People button clicked");
      break;
    case "planets":
      fetchPlanets();
      cardsSection.style.display = "grid";
      console.log("Planets button clicked");
      break;
    case "vehicles":
      fetchVehicles();
      cardsSection.style.display = "grid";
      console.log("Vehicles button clicked");
      break;
  }
};

// Event listener
navbar.addEventListener("click", handleNavbarButtons);

export default handleNavbarButtons;
