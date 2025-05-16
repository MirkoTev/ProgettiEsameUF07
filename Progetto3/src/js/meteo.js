
document.getElementById("getWeatherBtn").addEventListener("click", () => {
  // Verifica se il browser supporta la geolocalizzazione
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onPositionReceived, onPositionError);
  } else {
    alert("Geolocalizzazione non supportata dal browser.");
  }
});

//evento per la ricerca manuale delle coordinate
document.getElementById("locationForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Impedisce il comportamento di invio del modulo
  const lat = parseFloat(document.getElementById("latitudeInput").value);
  const lon = parseFloat(document.getElementById("longitudeInput").value);
  if (!isNaN(lat) && !isNaN(lon)) {
    getWeather(lat, lon); //chiamata API con le coordinate inserite
  } else {
    alert("Inserisci coordinate valide.");
  }
});

// Funzione chiamata quando otteniamo con successo latitudine e longitudine
function onPositionReceived(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  getWeather(lat, lon);  //chiamata API con le coordinate ricevute
}

// In caso di errore nella geolocalizzazione
function onPositionError(error) {
  alert("Errore nel recuperare la posizione: " + error.message);
}

// Funzione per chiamare le API Open-Meteo
function getWeather(latitude, longitude) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,rain,cloud_cover,wind_speed_10m,weather_code`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayWeather(data.current);  // Mostra i dati meteo nella pagina
    })
    .catch(err => {
      console.error("Errore nella chiamata API:", err);
    });
}

// Mostra i dati meteo nella pagina
function displayWeather(current) {
  document.getElementById("temperature").textContent = current.temperature_2m;
  document.getElementById("humidity").textContent = current.relative_humidity_2m;
  document.getElementById("precipitation").textContent = current.precipitation;
  document.getElementById("rain").textContent = current.rain;
  document.getElementById("clouds").textContent = current.cloud_cover;
  document.getElementById("wind").textContent = current.wind_speed_10m;
  document.getElementById("code").textContent = current.weather_code;

  //icona corrispondente al codice meteo
  const iconPath = getIconForWeatherCode(current.weather_code);
  const iconElement = document.getElementById("weatherIcon");
  iconElement.src = `../immagini/${iconPath}`;
  iconElement.alt = "Icona meteo";

  document.getElementById("weather").classList.remove("hidden"); // Mostra il box meteo
}

// Associa i weather_code a immagini
function getIconForWeatherCode(code) {
  // Mapping di base per esempio
  const icons = {
    0: "sole.png",           // Sereno
    1: "pocoNuvoloso.png",   // Poco nuvoloso
    2: "nuvoloso.png",          // Nuvoloso
    3: "coperto.png",        // Coperto
    45: "nebbia.png",            // Nebbia
    51: "pioviggine.png",        // Pioviggine leggera
    61: "pioggia.png",           // Pioggia leggera
    71: "neve.png",           // Neve leggera
    80: "rovesciPioggia.png",    // Rovesci
    95: "temporali.png",          // Temporali
  };
  
  // Ritorna l'immagine corrispondente
  return icons[code];
}
