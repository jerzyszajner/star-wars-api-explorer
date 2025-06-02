import createListItem from "./utils";

// Local images data
const imagesPlanets = [
  {
    src: "/images/planets/tatooine.webp",
    alt: "Tatooine",
    image_id: 1,
  },
  {
    src: "/images/planets/alderaan.webp",
    alt: "Alderaan",
    image_id: 2,
  },
  {
    src: "/images/planets/yavin-iv.webp",
    alt: "Yavin IV",
    image_id: 3,
  },
  {
    src: "/images/planets/hoth.webp",
    alt: "Hoth",
    image_id: 4,
  },
  {
    src: "/images/planets/dagobah.webp",
    alt: "Dagobah",
    image_id: 5,
  },
  {
    src: "/images/planets/bespin.webp",
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
