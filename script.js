  function search(event) {
      event.preventDefault();
      let searchInputElement = document.querySelector("#search-input");
      let citySearch = searchInputElement.value;
      let apikey = "afb1fco0e30530debtd23f53ac7d4cbb";
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${citySearch}&key=${apikey}`;

      axios.get(apiUrl).then(displayTemperature);
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
      let dayt = date.getDay();
      let dayss = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      let formattedDay = dayss[dayt];
      return `${formattedDay} ${hours}:${minutes}`;
    }

    let searchForm = document.querySelector("#search-form");
    searchForm.addEventListener("submit", search);

    let currentDateELement = document.querySelector("#current-date");
    let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let days = ["Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
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
SearchCity("Paris");
displayForecast();

