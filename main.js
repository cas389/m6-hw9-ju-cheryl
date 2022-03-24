let form = document.querySelector('form');
let input = document.querySelector('input');
let weather = document.getElementById('weather');


form.onsubmit = function(functionEvent) {
  functionEvent.preventDefault()
  var usersInput = input.value
  if(!usersInput) return
  fetch('https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=51e49b626dc2924e1eeab8c2d1ddb3d5&q=' + usersInput)
  .then(function(resultJson) {
      return resultJson.json();
  })
  .then(function(result){
    weatherResult(result)
    input.value = "";
  })
  .catch(function(error) {
    console.log(error);
  })
}

function weatherResult(weatherObject) {
  weather.innerHTML = "";

  if (weatherObject.Response === 'False') {
    weather.textContent = 'Location not found';
    return
  }
  /* Name of the Searched City with Country Code */
  var cityName = document.createElement('h2');
  cityName.textContent = weatherObject.name + ", " + weatherObject.sys.country;
  weather.appendChild(cityName);

  /* Description of Current Weather */
  var description = document.createElement('h3');
  description.textContent = "Current Weather: " + weatherObject.weather[0].description;
  weather.appendChild(description);

  /* Icon Image for Current Weather Conditions */
  var img = document.createElement('img');

  if (weatherObject.weather[0].description === "clear sky") {
    img.src = "http://openweathermap.org/img/wn/01d.png";
    weather.appendChild(img);
  } else if (weatherObject.weather[0].description === "few clouds") {
    img.src = "http://openweathermap.org/img/wn/02d.png";
    weather.appendChild(img);
  } else if (weatherObject.weather[0].description === "scattered clouds") {
    img.src = "http://openweathermap.org/img/wn/03d.png";
    weather.appendChild(img);
  } else if (weatherObject.weather[0].description === "overcast clouds") {
    img.src = "http://openweathermap.org/img/wn/03d.png";
    weather.appendChild(img);
  } else if (weatherObject.weather[0].description === "broken clouds") {
    img.src = "http://openweathermap.org/img/wn/04d.png";
    weather.appendChild(img);
  } else if (weatherObject.weather[0].description === "shower rain") {
    img.src = "http://openweathermap.org/img/wn/09d.png";
    weather.appendChild(img);
  } else if (weatherObject.weather[0].description === "rain") {
    img.src = "http://openweathermap.org/img/wn/10d.png";
    weather.appendChild(img);
  } else if (weatherObject.weather[0].description === "light rain") {
    img.src = "http://openweathermap.org/img/wn/10d.png";
    weather.appendChild(img);
  } else if (weatherObject.weather[0].description === "thunderstorm") {
    img.src = "http://openweathermap.org/img/wn/11d.png";
    weather.appendChild(img);
  } else if (weatherObject.weather[0].description === "snow") {
    img.src = "http://openweathermap.org/img/wn/13d.png";
    weather.appendChild(img);
  } else if (weatherObject.weather[0].description === "mist") {
    img.src = "http://openweathermap.org/img/wn/50d.png";
    weather.appendChild(img);
  } else {
  console.log("No image available");
  }


  /* Current Temperature */
  var temperature = document.createElement('h3');
  temperature.textContent = "Current: " + weatherObject.main.temp + " \xB0";
  weather.appendChild(temperature);

  /* Current "feels like" Temperature */
  var feelsLike = document.createElement('h3');
  feelsLike.textContent = "Feels Like : " + weatherObject.main.feels_like + " \xB0";
  weather.appendChild(feelsLike);

}
