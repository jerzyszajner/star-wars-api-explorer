const notificationMessage = document.querySelector(".notifications");

const showNotifications = (message) => {
  notificationMessage.textContent = message;
  notificationMessage.classList.add("notifications--show");
  setTimeout(() => {
    notificationMessage.classList.remove("notifications--show");
  }, 6000);
};

export default showNotifications;
