const form = document.querySelector('#search-form');
form.addEventListener('submit', getWeather);

function getWeather(event) {
    event.preventDefault();
  
    const cityInput = document.querySelector('#city-input');
    const city = cityInput.value;
  
    const apiKey = '2697dd39f625b16c7a0006cbf98fb849'; // Reemplaza con tu propia API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.querySelector('#weather-info');
        weatherInfo.innerHTML = '';
  
        const cityName = document.createElement('h2');
        cityName.textContent = data.name;
        weatherInfo.appendChild(cityName);
  
        const temperature = document.createElement('p');
        temperature.textContent = `Temperatura actual: ${data.main.temp}°C`;
        weatherInfo.appendChild(temperature);
  
        const description = document.createElement('p');
        description.textContent = `Descripción: ${data.weather[0].description}`;
        weatherInfo.appendChild(description);
  
        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
        const iconImage = document.createElement('img');
        iconImage.src = iconUrl;
        weatherInfo.appendChild(iconImage);
      })
      .catch(error => {
        console.error('Error al obtener los datos del clima', error);
        const weatherInfo = document.querySelector('#weather-info');
        weatherInfo.innerHTML = '<p>Error al obtener los datos del clima</p>';
      });
  }
  