import createListItem from "./utils";

// Local images data
const imagesVehicles = [
  {
    src: "../src/assets/images/vehicles/snowspeeder.jpg",
    alt: "Snowspeeder",
    image_id: 1,
  },
  {
    src: "../src/assets/images/vehicles/sand-crawler.jpg",
    alt: "Sand Crawler",
    image_id: 2,
  },
  {
    src: "../src/assets/images/vehicles/t-16-skyhopper.jpg",
    alt: "T-16 skyhopper",
    image_id: 3,
  },
  {
    src: "../src/assets/images/vehicles/x-34-landspeeder.jpg",
    alt: "X-34 landspeeder",
    image_id: 4,
  },
  {
    src: "../src/assets/images/vehicles/tie-ln-starfighter.jpg",
    alt: "TIE/LN starfighter",
    image_id: 5,
  },
  {
    src: "../src/assets/images/vehicles/tie-bomber.jpg",
    alt: "TIE bomber",
    image_id: 6,
  },
];

const renderVehicles = (vehiclesArray) => {
  const cardsContainer = document.querySelector(".card__section");
  cardsContainer.innerHTML = "";

  vehiclesArray.forEach((vehicle) => {
    const matchingImage = imagesVehicles.find(
      (imageVehicle) =>
        imageVehicle.alt.toLocaleLowerCase().trim() ===
        vehicle.name.toLocaleLowerCase().trim()
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
    image.alt = matchingImage.alt || "Star Wars vehicle image";

    // Create list items
    const name = createListItem("", vehicle.name);
    const model = createListItem("Model: ", vehicle.model);
    const manufacturer = createListItem("Manufacturer: ", vehicle.manufacturer);
    const crew = createListItem("Crew: ", vehicle.crew);
    const passengers = createListItem("Passengers: ", vehicle.passengers);

    // Add classes
    card.classList.add("card");
    imageContainer.classList.add("card__image-container");
    image.classList.add("card__image");
    infoContainer.classList.add("card__info-container");
    // Append list items to the container
    infoContainer.append(name, model, manufacturer, crew, passengers);

    // Toggle visibility of the card's info container
    card.addEventListener("click", () => {
      infoContainer.classList.toggle("card__info-container--active");
    });
  });
};

export default renderVehicles;
