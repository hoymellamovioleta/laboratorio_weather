/*console.log("Hola api clima");

//Definimos funciones
async function fetchWeatherData( latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    console.log(data.elevation); // El punto después de data es para ir extayendo cada dato
    console.log(data.current_weather);
    console.log(data.current_weather.temperature);
    return data.current_weather; //Retorno de los valores del clima
}

async function handleFetchClick(){ // Se usa async porque estamos usando await
    console.log("Boton fetch clickeado");
    const latitude = document.getElementById("latitude-input").value; //Se lee el valor del elemento en HTML con la API de document y extraigo el vlaor de latitude
    const longitude = document.getElementById("longitude-input").value;
    const currentTemperature = document.getElementById("temp-display"); 
    const windSpeed = document.getElementById("wind-display");

    const current_weather = await fetchWeatherData(latitude,longitude);
    currentTemperature.textContent = current_weather.temperature;
}*/
console.log("Hola api clima");

// Función para obtener datos del clima
async function fetchWeatherData(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    const response = await fetch(url);
    const data = await response.json();
    return data.current_weather; 
}

// Evento del botón
async function handleFetchClick() {
    const latitude = document.getElementById("latitude-input").value;
    const longitude = document.getElementById("longitude-input").value;

    const tempDisplay = document.getElementById("temp-display");
    const windDisplay = document.getElementById("wind-display");
    const resultBox = document.getElementById("weather-result");

    const current_weather = await fetchWeatherData(latitude, longitude);

    tempDisplay.textContent = current_weather.temperature;
    windDisplay.textContent = current_weather.windspeed;

    // Mostrar el cuadro de resultados
    resultBox.classList.remove("hidden");

    // Cambiar color según temperatura
    if (current_weather.temperature <= 10) {
        resultBox.style.background = "#6bb6ff";  // Azul frío
    } else if (current_weather.temperature <= 25) {
        resultBox.style.background = "#ffe56b";  // Amarillo cálido
    } else {
        resultBox.style.background = "#ff6b6b";  // Rojo caliente
    }
}
