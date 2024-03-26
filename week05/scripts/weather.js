const currentTemp = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=49.7557&lon=6.6394&units=imperial&appid=2eb95ba3243bdb54c74d4de49fc48841";
async function apiFetch(url) {
  debugger;
  const response = await fetch(url)
    .then((res) => res.json())
    .catch((err) => console.error(err));

  console.log("Weather Data API:", response);
  displayResults(response);
}
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
}

apiFetch(url);
