let form = document.querySelector('form');
let input = document.querySelector('input');
let weather = document.getElementById('weather');


form.onsubmit = function(functionEvent) {
  functionEvent.preventDefault()
  var usersInput = input.value
  if(!usersInput) return
  fetch('https://api.openweathermap.org/data/2.5/weather?appid=51e49b626dc2924e1eeab8c2d1ddb3d5&q=' + usersInput)
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
  description.textContent = "Weather Description: " + weatherObject.weather.description;
  weather.appendChild(description);

  /* Icon Image for Current Weather Conditions */

  /* Current Temperature */

  /* Current "feels like" Temperature */

}
