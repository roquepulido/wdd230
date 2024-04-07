// Weather data

document.getElementById("place").innerText = "Mérida, México";
const temp = document.getElementById("temp");
const weatherIcon = document.getElementById("weather-icon");

const apiKey = "d36f27cbcf934a43be27d2f7e20e7cf2";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.7557&lon=6.6394&units=imperial&appid=${apiKey}`;
async function apiFetch(url) {
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
