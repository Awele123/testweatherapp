  function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let city = searchInputElement.value;
    let apiKey = "afb1fco0e30530debtd23f53ac7d4cbb"
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(displayTemperature);
    }

function displayTemperature(response) {
      
      let temperature = Math.round(response.data.temperature.current);
      let temperatureElement = document.querySelector(
        ".current-temperature-value"
      );
      temperatureElement.innerHTML = temperature;
      let city = response.data.city;
      let cityElement = document.querySelector("#current-city");
      cityElement.innerHTML = city;
    }


    function formatDate(date) {
      let minutes = date.getMinutes();
      let hours = date.getHours();
      let day = date.getDay();
      let dayss = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      let formattedDay = dayss[day];
      return `${formattedDay} ${hours}:${minutes}`;
    }

    let searchForm = document.querySelector("#search-form");
    searchForm.addEventListener("submit", search);

    let currentDateELement = document.querySelector("#current-date");
    let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let days = ["Tue", "Wed", "Thur", "Fri", "Sat"];
  let forecastHtml = "";
  
  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
      <div class="daycontainer" >
    <div class="day">${day}</div>
    <div class="icon">⛅</div>
    <div class="tempcontainer">
      <div class="temp"><strong>32&deg;</strong></div>
      <div class="temp0">21&deg;</div>
    </div>
  </div >
  `;
  });
  forecastElement.innerHTML = forecastHtml;
}

displayForecast();

