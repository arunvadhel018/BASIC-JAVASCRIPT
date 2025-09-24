async function getWeather() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('cityInput').value;
    const resultDiv = document.getElementById('weatherResult');

    if (!city) {
        resultDiv.innerHTML = 'Please enter a city name';
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');

        const data = await response.json();
        const { name, main, weather } = data;
        resultDiv.innerHTML = `
      <h2>${name}</h2>
      <p><strong>${weather[0].main}:</strong> ${weather[0].description}</p>
      <p><strong>Temperature:</strong> ${main.temp}°C</p>
      <p><strong>Humidity:</strong> ${main.humidity}%</p>
    `;
    } catch (error) {
        resultDiv.innerHTML = 'Error: ' + error.message;
    }
}
