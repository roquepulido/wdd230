//Dates
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
//-----------

//Visits
const visitDisplay = document.getElementById("visits");

let numVisits = Number(localStorage.getItem("lastVisits")) || 0;

if (numVisits !== 0) {
  visitDisplay.textContent = numVisits;
} else {
  visitDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;
localStorage.setItem("lastVisits", numVisits);
//-----------

// Dummy weather data

document.getElementById("place").innerText = "Mérida, México";
document.getElementById("temp").innerHTML = "	&#129397 100°F - Hot";
