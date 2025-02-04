import createListItem from "./utils";

// Local images data
const imagesPlanets = [
  {
    src: "../src/assets/images/planets/tatooine.jpg",
    alt: "Tatooine",
    image_id: 1,
  },
  {
    src: "../src/assets/images/planets/alderaan.jpg",
    alt: "Alderaan",
    image_id: 2,
  },
  {
    src: "../src/assets/images/planets/yavin-iv.jpg",
    alt: "Yavin IV",
    image_id: 3,
  },
  {
    src: "../src/assets/images/planets/hoth.jpg",
    alt: "Hoth",
    image_id: 4,
  },
  {
    src: "../src/assets/images/planets/dagobah.jpg",
    alt: "Dagobah",
    image_id: 5,
  },
  {
    src: "../src/assets/images/planets/bespin.jpg",
    alt: "Bespin",
    image_id: 6,
  },
];

const renderPlanets = (planetsArray) => {
  const cardsContainer = document.querySelector(".card__section");
  cardsContainer.innerHTML = "";

  planetsArray.forEach((planet) => {
    const matchingImage = imagesPlanets.find(
      (imagePlanet) =>
        imagePlanet.alt.toLocaleLowerCase().trim() ===
        planet.name.toLocaleLowerCase().trim()
    );

    // Create elements
    const card = document.createElement("article");
    const imageContainer = document.createElement("figure");
    const image = document.createElement("img");
    const infoContainer = document.createElement("ul");

    // Append elements
    cardsContainer.append(card);
    card.append(imageContainer, infoContainer);
    imageContainer.append(image);

    // Insert content
    image.src = matchingImage.src;
    image.alt = matchingImage.alt || "Star Wars planet image";

    // Create list items
    const name = createListItem("", planet.name);
    const climate = createListItem("Climate: ", planet.climate);
    const terrain = createListItem("Terrain: ", planet.terrain);
    const population = createListItem("Population: ", planet.population);
    const gravity = createListItem("Gravity: ", planet.gravity);

    // Add classes
    card.classList.add("card");
    imageContainer.classList.add("card__image-container");
    image.classList.add("card__image");
    infoContainer.classList.add("card__info-container");

    // Append list items to the container
    infoContainer.append(name, climate, terrain, population, gravity);

    // Toggle visibility of the card's info container
    card.addEventListener("click", () => {
      infoContainer.classList.toggle("card__info-container--active");
    });
  });
};

export default renderPlanets;
