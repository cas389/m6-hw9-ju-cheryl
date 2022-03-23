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
  /*
  var icon = document.createElement('img');
  icon.textContent = weatherObject.weather[0].icon;
  weather.appendChild(icon);  */



  /* Current Temperature */
  var description = document.createElement('h3');
  description.textContent = "Current Temperature: " + weatherObject.main.temp + " \xB0";
  weather.appendChild(description);

  /* Current "feels like" Temperature */
  var description = document.createElement('h3');
  description.textContent = "Feels Like : " + weatherObject.main.feels_like + " \xB0";
  weather.appendChild(description);

}
