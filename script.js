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
      let day = date.getDay();
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      let formattedDay = days[day];
      return `${formattedDay} ${hours}:${minutes}`;
    }

    let searchForm = document.querySelector("#search-form");
    searchForm.addEventListener("submit", search);

    let currentDateELement = document.querySelector("#current-date");
    let currentDate = new Date();

    currentDateELement.innerHTML = formatDate(currentDate);