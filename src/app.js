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
if ((minutes < 10) & (hour < 10)) {
  currenthour.innerHTML = `0${hour}:0${minutes}`;
} else {
  currenthour.innerHTML = `${hour}:${minutes}`;
}

// Display current temp of the city

function showCurrentData(event) {
  event.preventDefault();
  let input = document.querySelector("#entered-city");
  let apiKey = "8cd67b9d5fe5dc5ff225fe7c46c974dd";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}`).then(showData);

  let currentcity = document.querySelector("#city");
  currentcity.innerHTML = `${input.value}`;

  let apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${input.value}&appid=${apiKey}&units=metric&cnt=5`;

  axios.get(`${apiUrlForecast}`).then(showForecast);
}

function showForecast(response) {
  console.log(response[1].forecast);
}

function showData(response) {
  let currenttemptext = document.querySelector("#current-temp");
  let currenttemp = Math.round(response.data.main.temp);
  currenttemptext.innerHTML = `${currenttemp}ºC`;

  let currentminmaxtemptext = document.querySelector("#current-min-max-temp");

  let currenttempmin = Math.round(response.data.main.temp_min);
  let currenttempmax = Math.round(response.data.main.temp_max);
  currentminmaxtemptext.innerHTML = `${currenttempmin}ºC / ${currenttempmax}ºC`;
}

let form = document.querySelector("form");
form.addEventListener("submit", showCurrentData);

// Change to Cº or Fº

// let cbutton = document.querySelector("#c-button");
// cbutton.addEventListener("click", showData);

// function changeFarenh() {
// let currenttemp = document.querySelector("#current-temp");
// currenttemp.innerHTML = "72º";
// let currentminmaxtemp = document.querySelector("#current-min-max-temp");
// currentminmaxtemp.innerHTML = "61º / 75º";
//}

//let fbutton = document.querySelector("#f-button");
//fbutton.addEventListener("click", changeFarenh);

// Current city button

function showCurrentCityData(response) {
  let currenttemptext = document.querySelector("#current-temp");
  let currenttemp = Math.round(response.data.main.temp);
  currenttemptext.innerHTML = `${currenttemp}ºC`;

  let currentminmaxtemptext = document.querySelector("#current-min-max-temp");

  let currenttempmin = Math.round(response.data.main.temp_min);
  let currenttempmax = Math.round(response.data.main.temp_max);
  currentminmaxtemptext.innerHTML = `${currenttempmin}ºC / ${currenttempmax}ºC`;

  let currentcity = document.querySelector("#city");
  currentcity.innerHTML = `${response.data.name}`;
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

// 5 days forecast
