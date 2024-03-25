const getLastModification = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};
document.getElementById("year").innerText = new Date().getFullYear();
document.getElementById(
  "lastModified"
).innerText = `Last Modification: ${getLastModification(
  document.lastModified
)}`;

//Hamburger button
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});
document.addEventListener("DOMContentLoaded", function () {
  
  // Check if localStorage has the last visit date
  if (localStorage.getItem("lastVisit")) {
    const lastVisit = Number(localStorage.getItem("lastVisit"));
    const currentDate = Date.now();
    const timeDiff = currentDate - lastVisit;
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24)); // Calculate difference in days

    if (daysDiff < 1) {
      document.getElementById("visits").innerText = "Back so soon! Awesome!";
    } else if (daysDiff === 1) {
      document.getElementById("visits").innerText =
        "You last visited 1 day ago.";
    } else {
      document.getElementById("visits").innerText =
        "You last visited " + daysDiff + " days ago.";
    }
  } else {
    document.getElementById("visits").innerText =
      "Welcome! Let us know if you have any questions.";
  }

  // Save current date as last visit date
  localStorage.setItem("lastVisit", Date.now());
});
