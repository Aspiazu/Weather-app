// Current date and hour

let now = new Date();
let date = now.getDate();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let year = now.getFullYear();
let hour = now.getHours();
let minutes = now.getMinutes();

let currentdate = document.querySelector("#current-date");
currentdate.innerHTML = `${date} ${month} ${year}`;

let currenthour = document.querySelector("#current-hour");

if ((hour > 10) & (minutes > 10)) {
  currenthour.innerHTML = `${hour}:${minutes}`;
} else {
  if ((hour < 10) & (minutes > 10)) {
    currenthour.innerHTML = `0${hour}:${minutes}`;
  } else {
    if ((hour > 10) & (minutes < 10)) {
      currenthour.innerHTML = `${hour}:0${minutes}`;
    } else {
      currenthour.innerHTML = `0${hour}:0${minutes}`;
    }
  }
}

// Display Bilbao weather

function showBilbao() {
  let apiKey = "8cd67b9d5fe5dc5ff225fe7c46c974dd";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Bilbao&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}`).then(showBilbaoData);

  let currentcity = document.querySelector("#city");
  currentcity.innerHTML = `Bilbao`;
}

function showBilbaoData(response) {
  let currentemoji = document.querySelector("#current-emoji");
  currentemoji.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  let descriptiontext = document.querySelector("#description");
  let currentdescription = response.data.weather[0].description;
  descriptiontext.innerHTML = `${currentdescription}`;

  let currenttemptext = document.querySelector("#current-temp");
  let currenttemp = Math.round(response.data.main.temp);
  currenttemptext.innerHTML = `${currenttemp}ºC`;

  celsiustemperature = response.data.main.temp;
  celsiustemperaturemax = response.data.main.temp_max;
  celsiustemperaturemin = response.data.main.temp_min;

  let currentminmaxtemptext = document.querySelector("#current-min-max-temp");
  let currenttempmin = Math.round(response.data.main.temp_min);
  let currenttempmax = Math.round(response.data.main.temp_max);
  currentminmaxtemptext.innerHTML = `${currenttempmin}ºC / ${currenttempmax}ºC`;

  let humiditytext = document.querySelector("#humidity");
  let currenthumidity = response.data.main.humidity;
  humiditytext.innerHTML = `Humidity: ${currenthumidity}%`;

  let windspeedtext = document.querySelector("#wind");
  let currentwind = response.data.wind.speed;
  windspeedtext.innerHTML = `Wind: ${currentwind} km/h`;
}

showBilbao();

// Display current temp of the city

function showCurrentData(event) {
  event.preventDefault();
  let input = document.querySelector("#entered-city");
  let apiKey = "8cd67b9d5fe5dc5ff225fe7c46c974dd";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}`).then(showData);

  let currentcity = document.querySelector("#city");
  currentcity.innerHTML = `${input.value}`;

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showForecast);
}

function showForecast(response) {
  console.log(response.data.list[0]);
}

function showData(response) {
  let currentemoji = document.querySelector("#current-emoji");
  currentemoji.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  let descriptiontext = document.querySelector("#description");
  let currentdescription = response.data.weather[0].description;
  descriptiontext.innerHTML = `${currentdescription}`;

  let currenttemptext = document.querySelector("#current-temp");
  let currenttemp = Math.round(response.data.main.temp);
  currenttemptext.innerHTML = `${currenttemp}ºC`;

  celsiustemperature = response.data.main.temp;
  celsiustemperaturemax = response.data.main.temp_max;
  celsiustemperaturemin = response.data.main.temp_min;

  let currentminmaxtemptext = document.querySelector("#current-min-max-temp");
  let currenttempmin = Math.round(response.data.main.temp_min);
  let currenttempmax = Math.round(response.data.main.temp_max);
  currentminmaxtemptext.innerHTML = `${currenttempmin}ºC / ${currenttempmax}ºC`;

  let humiditytext = document.querySelector("#humidity");
  let currenthumidity = response.data.main.humidity;
  humiditytext.innerHTML = `Humidity: ${currenthumidity}%`;

  let windspeedtext = document.querySelector("#wind");
  let currentwind = response.data.wind.speed;
  windspeedtext.innerHTML = `Wind: ${currentwind} km/h`;
}

let form = document.querySelector("form");
form.addEventListener("submit", showCurrentData);

// Current city button

function showCurrentCityData(response) {
  let currentemoji = document.querySelector("#current-emoji");
  currentemoji.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  let descriptiontext = document.querySelector("#description");
  let currentdescription = response.data.weather[0].description;
  descriptiontext.innerHTML = `${currentdescription}`;

  let currenttemptext = document.querySelector("#current-temp");
  let currenttemp = Math.round(response.data.main.temp);
  currenttemptext.innerHTML = `${currenttemp}ºC`;

  celsiustemperature = response.data.main.temp;
  celsiustemperaturemax = response.data.main.temp_max;
  celsiustemperaturemin = response.data.main.temp_min;

  let currentminmaxtemptext = document.querySelector("#current-min-max-temp");

  let currenttempmin = Math.round(response.data.main.temp_min);
  let currenttempmax = Math.round(response.data.main.temp_max);
  currentminmaxtemptext.innerHTML = `${currenttempmin}ºC / ${currenttempmax}ºC`;

  let currentcity = document.querySelector("#city");
  currentcity.innerHTML = `${response.data.name}`;

  let humiditytext = document.querySelector("#humidity");
  let currenthumidity = response.data.main.humidity;
  humiditytext.innerHTML = `Humidity: ${currenthumidity}%`;

  let windspeedtext = document.querySelector("#wind");
  let currentwind = response.data.wind.speed;
  windspeedtext.innerHTML = `Wind: ${currentwind} km/h`;
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let apiKey = "8cd67b9d5fe5dc5ff225fe7c46c974dd";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}`).then(showCurrentCityData);
}

function getCurrentCity(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentcitybutton = document.querySelector("#current-city-button");
currentcitybutton.addEventListener("click", getCurrentCity);

// Change to Cº or Fº

let celsiustemperature = null;
let celsiustemperaturemax = null;
let celsiustemperaturemin = null;

function changeFarenh() {
  let currenttemp = document.querySelector("#current-temp");
  let farenheittemp = (celsiustemperature * 9) / 5 + 32;
  currenttemp.innerHTML = `${Math.round(farenheittemp)}ºF`;

  let currenttempmaxmin = document.querySelector("#current-min-max-temp");
  let farenheittempmax = (celsiustemperaturemax * 9) / 5 + 32;
  let farenheittempmin = (celsiustemperaturemin * 9) / 5 + 32;
  currenttempmaxmin.innerHTML = `${Math.round(
    farenheittempmin
  )}ºF / ${Math.round(farenheittempmax)}ºF`;
}

function changeCelsius() {
  let currenttemp = document.querySelector("#current-temp");
  currenttemp.innerHTML = `${Math.round(celsiustemperature)}ºC`;

  let currenttempmaxmin = document.querySelector("#current-min-max-temp");
  currenttempmaxmin.innerHTML = `${Math.round(
    celsiustemperaturemin
  )}ºC / ${Math.round(celsiustemperaturemax)}ºC`;
}

let fbutton = document.querySelector("#f-button");
fbutton.addEventListener("click", changeFarenh);

let cbutton = document.querySelector("#c-button");
cbutton.addEventListener("click", changeCelsius);
