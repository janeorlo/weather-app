function getWeather() {
    const locationInput = document.getElementById('location-input').value;
    const apiKey = 'YOUR_API_KEY'; // replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherOutput = document.getElementById('weather-output');
            const temperature = Math.round(data.main.temp - 273.15); // convert from Kelvin to Celsius and round
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

            weatherOutput.innerHTML = `
                <p>Temperature: ${temperature} &#8451;</p>
                <p>Description: ${description}</p>
                <img src="${iconUrl}" alt="${description}">
            `;
        })
        .catch(error => {
            const weatherOutput = document.getElementById('weather-output');
            weatherOutput.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}
