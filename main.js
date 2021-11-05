// API key: 2eae42e7e9b95fb7d967fb8495a714a6
// JS takes in user data
    // Uses data for API call
    // Return data and parse info for UI

const api = {
  key: "2eae42e7e9b95fb7d967fb8495a714a6",
  base: "https://api.openweathermap.org/data/2.5/weather?q='&appid=2eae42e7e9b95fb7d967fb8495a714a6"
}

var searchBar = document.getElementById('searchUser');

var button = document.getElementById('submit')
button.addEventListener('click', () => {
    getResults(searchBar.value)
})

async function getResults(location){
    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' +
      location +
      '&units=imperial&appid=2eae42e7e9b95fb7d967fb8495a714a6')
    .then(weather => {
            return weather.json();
          }).then(displayResults);
    }

function displayResults (weather) {
  console.log(weather);
  let city = document.querySelector('.city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let temp = document.querySelector('.temp');
  temp.innerHTML = 'Current temperature: ' + `${Math.round(weather.main.temp)}<span>°F</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;

  let feelsLike = document.querySelector('.feels');
  feelsLike.innerText = `Feels like: ${Math.round(weather.main.feels_like)} °F `;

  let iconElement = document.querySelector(".weather-icon");
    document.querySelector(".weather-icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
      iconElement.innerHTML = (current.weather.icon);
}

