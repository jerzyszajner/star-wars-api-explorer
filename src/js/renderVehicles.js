import createListItem from "./utils";

// Local images data
const imagesVehicles = [
  {
    src: "/images/vehicles/snowspeeder.webp",
    alt: "Snowspeeder",
    image_id: 1,
  },
  {
    src: "/images/vehicles/sand-crawler.webp",
    alt: "Sand Crawler",
    image_id: 2,
  },
  {
    src: "/images/vehicles/t-16-skyhopper.webp",
    alt: "T-16 skyhopper",
    image_id: 3,
  },
  {
    src: "/images/vehicles/x-34-landspeeder.webp",
    alt: "X-34 landspeeder",
    image_id: 4,
  },
  {
    src: "/images/vehicles/tie-ln-starfighter.webp",
    alt: "TIE/LN starfighter",
    image_id: 5,
  },
  {
    src: "/images/vehicles/tie-bomber.webp",
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
