import createListItem from "./utils";

// Local images data
const imagesPeople = [
  {
    src: "/images/people/luke-skywalker.webp",
    alt: "Luke Skywalker",
    image_id: 1,
  },
  {
    src: "/images/people/c-3po.webp",
    alt: "C-3PO",
    image_id: 2,
  },
  {
    src: "/images/people/r2-d2.webp",
    alt: "R2-D2",
    image_id: 3,
  },
  {
    src: "/images/people/darth-vader.webp",
    alt: "Darth Vader",
    image_id: 4,
  },
  {
    src: "/images/people/leia-organa.webp",
    alt: "Leia Organa",
    image_id: 5,
  },
  {
    src: "/images/people/owen-lars.webp",
    alt: "Owen Lars",
    image_id: 6,
  },
];

const renderPeople = (peopleArray) => {
  const cardsContainer = document.querySelector(".card__section");
  cardsContainer.innerHTML = "";

  peopleArray.forEach((people) => {
    const matchingImage = imagesPeople.find(
      (imagePeople) =>
        imagePeople.alt.toLocaleLowerCase().trim() ===
        people.name.toLocaleLowerCase().trim()
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
    image.alt = matchingImage.alt || "Star Wars people image";

    // Create list items
    const name = createListItem("", people.name);
    const height = createListItem("Height: ", people.height);
    const mass = createListItem("Mass: ", people.mass);
    const hairColor = createListItem("Hair color: ", people.hair_color);
    const skinColor = createListItem("Skin color: ", people.skin_color);

    // Add classes
    card.classList.add("card");
    imageContainer.classList.add("card__image-container");
    image.classList.add("card__image");
    infoContainer.classList.add("card__info-container");

    // Append list items to the container
    infoContainer.append(name, height, mass, hairColor, skinColor);

    // Toggle visibility of the card's info container
    card.addEventListener("click", () => {
      infoContainer.classList.toggle("card__info-container--active");
    });
  });
};

export default renderPeople;
