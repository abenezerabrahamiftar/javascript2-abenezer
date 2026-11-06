// API_KEY wordt geladen vanuit config.js (zie config.example.js voor instructies)

const searchForm = document.querySelector('#search-form');
const cityInput = document.querySelector('#city-input');
const weatherInfo = document.querySelector('#weather-info');

const showWeather = (data) => {
  console.log(data); // Bekijk de structuur

  const { name, main, wind, weather } = data;
  const icon = weather[0].icon;

  weatherInfo.innerHTML = `
    <article>
      <h2>${name}</h2>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${weather[0].description}">
      <p><span>Temperatuur</span><span>${Math.round(main.temp)}°C</span></p>
      <p><span>Gevoelstemperatuur</span><span>${Math.round(main.feels_like)}°C</span></p>
      <p><span>Luchtvochtigheid</span><span>${main.humidity}%</span></p>
      <p><span>Windsnelheid</span><span>${wind.speed} m/s</span></p>
    </article>
  `;
};

const getWeather = (city) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
      if (Number(data.cod) !== 200) {
        weatherInfo.innerHTML = `<p>Stad niet gevonden. Probeer het opnieuw.</p>`;
        return;
      }
      showWeather(data);
    })
    .catch(error => {
      console.error('Fout:', error);
      weatherInfo.innerHTML = `<p>Er ging iets mis bij het laden.</p>`;
    });
};

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const city = cityInput.value.trim();
  if (city === '') {
    return;
  }

  getWeather(city);
  cityInput.value = '';
});