//OpenWeather API
let apiKey = '8767292ff2d49f8b711c0679b1936ed2';
console.log(apiKey);


// Selectors for HTML elements to display weather information
const cityEl = $('h2#city');
const weatherIconEl = $('img#weather-icon');

// Display current weather in DOM elements
cityEl.text(response.name);
let formattedDate = moment.unix(response.dt).format('L');
dateEl.text(formattedDate);
let weatherIcon = response.weather[0].icon;
weatherIconEl.attr('src', `http://openweathermap.org/img/wn/${weatherIcon}.png`).attr('alt', response.weather[0].description);
temperatureEl.html(((response.main.temp - 273.15) * 1.8 + 32).toFixed(1));
