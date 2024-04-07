const currentTemp = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const captionDesc = document.querySelector("figcaption");

const apiKey = "d36f27cbcf934a43be27d2f7e20e7cf2";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.7557&lon=6.6394&units=imperial&appid=${apiKey}`;
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
