const apiKey = '7a6fc1d7a21de5aee6693e53dbcc3907';  
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lang=ru&q=';

document.getElementById('get-weather').addEventListener('click', getWeather);

function getWeather() {
  const city = document.getElementById('city-input').value || 'Алматы';
  fetch(apiUrl + city + '&appid=' + apiKey)
    .then(response => response.json())
    .then(data => {
      if (data.cod !== 200) {
        document.getElementById('weather-info').innerHTML = '<p>Город не найден.</p>';
      } else {
        const weatherData = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Температура: ${data.main.temp}°C</p>
          <p>Погода: ${data.weather[0].description}</p>
          <p>Влажность: ${data.main.humidity}%</p>
          <p>Ветер: ${data.wind.speed} м/с</p>
        `;
        document.getElementById('weather-info').innerHTML = weatherData;
      }
    })
    .catch(err => {
      document.getElementById('weather-info').innerHTML = '<p>Ошибка при получении данных.</p>';
    });
}

getWeather();
