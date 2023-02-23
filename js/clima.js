const apiKey = "2697dd39f625b16c7a0006cbf98fb849";

var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var wind = document.querySelector('.Wind');
var humidity = document.querySelector('.Humidity')
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');


button.addEventListener('click', function (name) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      var tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];
      var windValue = data['wind']['speed'];
      var humidityValue = data['main']['humidity'];
      var iconValue = data['weather'][0]['icon'];
      main.innerHTML = nameValue;
      desc.innerHTML = "Desc - " + descValue;
      temp.innerHTML = "Temperatura - " + tempValue + "°C";
      wind.innerHTML = "Velocidad del viento - " + windValue + " km/h";
      humidity.innerHTML = "Humedad - " + humidityValue + " %";
      var iconUrl = `http://openweathermap.org/img/w/${iconValue}.png`;
      document.getElementById('weather-icon').setAttribute('src', iconUrl);
      input.value = "";
    })
    .catch(err => alert("Ha ocurrido un error!"));
});
