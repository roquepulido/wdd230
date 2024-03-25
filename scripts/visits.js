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