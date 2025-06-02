import fetchFilms from "./fetchFilms";
import fetchPeople from "./fetchPeople";
import fetchPlanets from "./fetchPlanets";
import fetchVehicles from "./fetchVehicles";

// Initialize navigation functionality
const navigation = () => {
  // Selectors
  const navbar = document.querySelector(".navbar");
  const navbarItems = document.querySelectorAll(".navbar__item");
  const navbarControlsList = document.querySelector(".navbar__controls-list");

  // Helper function to activate navbar item
  const activateNavItem = (action) => {
    const button = document.querySelector(`[data-action="${action}"]`);
    if (button) {
      const item = button.closest(".navbar__item");
      if (item) {
        item.classList.add("navbar__item--active");
      }
    }
  };

  // Handle navbar buttons
  const handleNavButtons = (e) => {
    const clickedButton = e.target.closest("button");
    if (!clickedButton || !clickedButton.dataset.action) return;

    e.preventDefault();
    const action = clickedButton.dataset.action;

    // Handle toggle action (hamburger menu)
    if (action === "toggle") {
      navbarControlsList.classList.toggle("navbar__controls-list--active");
      return;
    }

    // Close mobile menu and reset active states
    navbarControlsList.classList.remove("navbar__controls-list--active");
    navbarItems.forEach((item) =>
      item.classList.remove("navbar__item--active")
    );

    // Handle content actions
    switch (action) {
      case "logo":
        fetchFilms();
        activateNavItem("films");
        break;
      case "films":
        fetchFilms();
        activateNavItem("films");
        break;
      case "people":
        fetchPeople();
        activateNavItem("people");
        break;
      case "planets":
        fetchPlanets();
        activateNavItem("planets");
        break;
      case "vehicles":
        fetchVehicles();
        activateNavItem("vehicles");
        break;
    }
  };

  // Add event listeners
  navbar.addEventListener("click", handleNavButtons);
};

export default navigation;
