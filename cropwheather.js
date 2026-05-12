function fetchWeatherData() {
    const apiKey = 'bc271546f820102375c8ded6799783d1';
    const city = 'siliguri'; // Replace with your desired city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the full response to check the structure
            const temp = data.main.temp;
            const cityName = data.name;
            const weatherCondition = data.weather[0].main.toLowerCase(); // e.g., "clear", "rain", "clouds"
            const weatherDescription = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const rainfall = data.rain ? data.rain['1h'] : 0; // Rainfall in the last hour
            const snow = data.snow ? data.snow['1h'] : 0; // Snowfall in the last hour

            const cityElement = document.getElementById('weather-city');
            const tempElement = document.getElementById('weather-temp');
            const weatherIconElement = document.getElementById('weather-icon');
            const weatherContainer = document.getElementById('weather-info');
            const weatherDescriptionElement = document.getElementById('weather-description');
            const weatherHumidityElement = document.getElementById('weather-humidity');
            const weatherWindElement = document.getElementById('weather-wind');
            const rainfallAlertElement = document.getElementById('heavy-rainfall-alert');
            const frostAlertElement = document.getElementById('frost-alert');

            if (cityElement && tempElement && weatherContainer) {
                cityElement.textContent = cityName;
                tempElement.textContent = `${temp}°C`;
                weatherDescriptionElement.textContent = `Description: ${weatherDescription}`;
                weatherHumidityElement.textContent = `Humidity: ${humidity}%`;
                weatherWindElement.textContent = `Wind Speed: ${windSpeed} m/s`;

                // Set the weather icon
                const iconCode = data.weather[0].icon;
                weatherIconElement.src = `http://openweathermap.org/img/wn/${iconCode}.png`;

                // Remove any existing weather-related classes
                weatherContainer.classList.remove('sunny', 'rainy', 'cloudy', 'snow', 'stormy');

                // Add the appropriate class and background image based on the weather condition
                if (weatherCondition.includes('clear')) {
                    weatherContainer.classList.add('sunny');
                } else if (weatherCondition.includes('rain')) {
                    weatherContainer.classList.add('rainy');
                } else if (weatherCondition.includes('clouds')) {
                    weatherContainer.classList.add('cloudy');
                } else if (weatherCondition.includes('snow')) {
                    weatherContainer.classList.add('snow');
                } else if (weatherCondition.includes('storm')) {
                    weatherContainer.classList.add('stormy');
                }

                // Weather alerts
                if (rainfall > 50) { // Heavy rainfall threshold (in mm)
                    if (rainfallAlertElement) {
                        rainfallAlertElement.style.display = 'block';
                        rainfallAlertElement.textContent = `Alert: Heavy rainfall detected (${rainfall} mm in the last hour).`;
                    }
                } else {
                    if (rainfallAlertElement) {
                        rainfallAlertElement.style.display = 'none';
                    }
                }

                if (temp <= 0) { // Frost condition threshold (0°C)
                    if (frostAlertElement) {
                        frostAlertElement.style.display = 'block';
                        frostAlertElement.textContent = 'Alert: Frost conditions detected.';
                    }
                } else {
                    if (frostAlertElement) {
                        frostAlertElement.style.display = 'none';
                    }
                }
            } else {
                console.error('Weather elements not found in the DOM.');
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

fetchWeatherData();
