// Local images data
const imagesPeople = [
  {
    src: "../src/assets/images/people/luke-skywalker.jpg",
    alt: "Luke Skywalker",
    image_id: 1,
  },
  {
    src: "../src/assets/images/people/c-3po.jpg",
    alt: "C-3PO",
    image_id: 2,
  },
  {
    src: "../src/assets/images/people/r2-d2.jpg",
    alt: "R2-D2",
    image_id: 3,
  },
  {
    src: "../src/assets/images/people/darth-vader.jpg",
    alt: "Darth Vader",
    image_id: 4,
  },
  {
    src: "../src/assets/images/people/leia-organa.jpg",
    alt: "Leia Organa",
    image_id: 5,
  },
  {
    src: "../src/assets/images/people/owen-lars.jpg",
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
    const name = document.createElement("li");
    const height = document.createElement("li");
    const heightLabel = document.createElement("span");
    const mass = document.createElement("li");
    const massLabel = document.createElement("span");
    const hairColor = document.createElement("li");
    const hairColorLabel = document.createElement("span");
    const skinColor = document.createElement("li");
    const skinColorLabel = document.createElement("span");

    // Append elements
    cardsContainer.append(card);
    card.append(imageContainer, infoContainer);
    imageContainer.append(image);
    infoContainer.append(name, height, mass, hairColor, skinColor);
    height.append(heightLabel);
    mass.append(massLabel);
    hairColor.append(hairColorLabel);
    skinColor.append(skinColorLabel);

    // Insert content and append values
    image.src = matchingImage.src;
    image.alt = matchingImage.alt || "Star Wars people image";
    name.textContent = people.name;
    heightLabel.textContent = "Height: ";
    height.append(people.height);
    massLabel.textContent = "Mass: ";
    mass.append(people.mass);
    hairColorLabel.textContent = "Hair color: ";
    hairColor.append(people.hair_color);
    skinColorLabel.textContent = "Skin color: ";
    skinColor.append(people.skin_color);

    // Add classes
    card.classList.add("card");
    imageContainer.classList.add("card__image-container");
    image.classList.add("card__image");
    infoContainer.classList.add("card__info-container");
    name.classList.add("card__info-item");
    height.classList.add("card__info-item");
    heightLabel.classList.add("card__info-label");
    mass.classList.add("card__info-item");
    massLabel.classList.add("card__info-label");
    hairColor.classList.add("card__info-item");
    hairColorLabel.classList.add("card__info-label");
    skinColor.classList.add("card__info-item");
    skinColorLabel.classList.add("card__info-label");

    card.addEventListener("click", () => {
      card.classList.toggle("card__info-container--active");
    });
  });
};

export default renderPeople;
