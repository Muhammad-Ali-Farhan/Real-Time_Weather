document.getElementById('getWeather').addEventListener('click', async () => {
    const city = document.getElementById('city').value;
    const response = await fetch(`/weather?city=${city}`); // Fixed the URL format
    const resultDiv = document.getElementById('weatherResult');

    if (response.ok) {
        const weatherData = await response.json();
        resultDiv.innerHTML = `
        <div class="main">
            <h2>${weatherData.name}</h2>
            <p>${weatherData.main.temp} °C</p>
            <p>${weatherData.weather[0].description}</p>
            <p>Humidity: ${weatherData.main.humidity} %</p>
            <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
        </div>
        `;
    } else {
        resultDiv.innerHTML = '<p>City not found. Please try again.</p>';
    }
});
