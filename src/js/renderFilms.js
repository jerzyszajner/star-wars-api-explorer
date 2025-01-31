// Local images data
const imagesFilms = [
  {
    src: "../src/assets/images/films/the-phantom-menace.jpg",
    alt: "The Phantom Menace",
    image_id: 1,
  },
  {
    src: "../src/assets/images/films/attack-of-the-clones.jpg",
    alt: "Attack of the Clones",
    image_id: 2,
  },
  {
    src: "../src/assets/images/films/revenge-of-the-sith.jpg",
    alt: "Revenge of the Sith",
    image_id: 3,
  },
  {
    src: "../src/assets/images/films/a-new-hope.jpg",
    alt: "A New Hope",
    image_id: 4,
  },
  {
    src: "../src/assets/images/films/the-empire-strikes-back.jpg",
    alt: "The Empire Strikes Back",
    image_id: 5,
  },
  {
    src: "../src/assets/images/films/return-of-the-jedi.jpg",
    alt: "Return of the Jedi",
    image_id: 6,
  },
];

const renderFilms = (filmsArray) => {
  const cardsContainer = document.querySelector(".card__section");
  cardsContainer.innerHTML = "";

  filmsArray.forEach((film) => {
    const matchingImage = imagesFilms.find(
      (imageFilm) =>
        imageFilm.alt.toLocaleLowerCase().trim() ===
        film.title.toLocaleLowerCase().trim()
    );

    // Create elements
    const card = document.createElement("article");
    const imageContainer = document.createElement("figure");
    const image = document.createElement("img");
    const infoContainer = document.createElement("ul");
    const title = document.createElement("li");
    const episode = document.createElement("li");
    const episodeLabel = document.createElement("span");
    const releaseDate = document.createElement("li");
    const releaseDateLabel = document.createElement("span");
    const director = document.createElement("li");
    const directorLabel = document.createElement("span");
    const openingCrawl = document.createElement("li");
    const openingCrawlLabel = document.createElement("span");

    // Append elements
    cardsContainer.append(card);
    card.append(imageContainer, infoContainer);
    imageContainer.append(image);
    infoContainer.append(title, episode, releaseDate, director, openingCrawl);
    episode.append(episodeLabel);
    releaseDate.append(releaseDateLabel);
    director.append(directorLabel);
    openingCrawl.append(openingCrawlLabel);

    // Insert content and append values
    image.src = matchingImage.src;
    image.alt = matchingImage.alt || "Star Wars film image";
    title.textContent = film.title;
    episodeLabel.textContent = "Episode: ";
    episode.append(film.episode_id);
    releaseDateLabel.textContent = "Release date: ";
    releaseDate.append(film.release_date);
    directorLabel.textContent = "Director: ";
    director.append(film.director);
    openingCrawlLabel.textContent = "Opening crawl: ";
    openingCrawl.append(film.opening_crawl);

    // Add classes
    card.classList.add("card");
    imageContainer.classList.add("card__image-container");
    image.classList.add("card__image");
    infoContainer.classList.add("card__info-container");
    title.classList.add("card__info-item");
    episode.classList.add("card__info-item");
    episodeLabel.classList.add("card__info-label");
    releaseDate.classList.add("card__info-item");
    releaseDateLabel.classList.add("card__info-label");
    director.classList.add("card__info-item");
    directorLabel.classList.add("card__info-label");
    openingCrawl.classList.add("card__info-item");
    openingCrawlLabel.classList.add("card__info-label");

    card.addEventListener("click", () => {
      infoContainer.classList.toggle("card__info-container--active");
    });
  });
};

export default renderFilms;
