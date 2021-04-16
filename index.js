const teamCarousel = document.getElementById("team").classList;
const leftButton = document.querySelector("#left-button").focus();
const moveCarousel = (e) => {
  if (teamCarousel.contains("moveRight") && e.target.id === "left-button") {
    teamCarousel.remove("moveRight");
  } else if (e.target.id === "right-button") teamCarousel.add("moveRight");
};
