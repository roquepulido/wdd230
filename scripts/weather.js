// Weather data

document.getElementById("place").innerText = "Mérida, México";
const temp = document.getElementById("temp");
const weatherIcon = document.getElementById("weather-icon");

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=20.97537&lon=-89.61696&units=imperial&appid=2eb95ba3243bdb54c74d4de49fc48841";
async function apiFetch(url) {
  debugger;
  const response = await fetch(url)
    .then((res) => res.json())
    .catch((err) => console.error(err));

  console.log("Weather Data API:", response);
  displayResults(response);
}
function displayResults(data) {
  temp.innerHTML = `${data.main.temp}&deg;F - ${data.weather[0].description}`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", data.weather[0].description);
}

apiFetch(url);
