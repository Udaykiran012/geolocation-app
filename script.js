document.addEventListener('DOMContentLoaded', function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert('Geolocation is not supported by your browser');
    }
  });
  
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=23a32f8645b1d178117426ed1b4b14d8&units=metric`)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }
  
  function error() {
    alert('Unable to retrieve your location');
  }
  
  function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const city = data.name;
  
    weatherDiv.innerHTML = `
      <p>Location: ${city}</p>
      <p>Temperature: ${temperature}°C</p>
      <p>Description: ${description}</p>
    `;
  }
  