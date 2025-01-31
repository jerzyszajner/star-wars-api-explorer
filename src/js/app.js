import fetchFilms from "./fetchFilms.js";

// Start App
const startApp = () => {
  console.log("🚀 App started...");
  fetchFilms();
};

document.addEventListener("DOMContentLoaded", startApp);
