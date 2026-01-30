//1. Select the target element
const appContainer = document.getElementById("app");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", () => {
  const profileCard = document.createElement("div");
  profileCard.className = "profile-card";

  const profileImg = document.createElement("img");
  profileImg.src =
    "https://cdn.pixabay.com/photo/2023/01/22/23/59/couple-7737589__480.png";

  const heading = document.createElement("h2");
  heading.textContent = "Sahil Mann";

  const profileDescription = document.createElement("p");
  profileDescription.textContent =
    "A passionate Web Developer with experience in JS and React.";

  profileCard.appendChild(profileImg);
  profileCard.appendChild(heading);
  profileCard.appendChild(profileDescription);
  appContainer.appendChild(profileCard);
});
