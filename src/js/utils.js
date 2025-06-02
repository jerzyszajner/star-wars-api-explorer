// Utility function to create a list item with a title and content
const createListItem = (title, content) => {
  const item = document.createElement("li");
  const itemTitle = document.createElement("h3");
  const itemContent = document.createElement("p");

  item.append(itemTitle, itemContent);

  itemTitle.textContent = title;
  itemContent.textContent = content;

  item.classList.add("card__info-item");
  itemTitle.classList.add("card__info-label");
  itemContent.classList.add("card__info-paragraph");

  return item;
};

export default createListItem;
