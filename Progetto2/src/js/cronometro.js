// Variabili per il tempo
let minuti = 0;
let secondi = 0;
let millisecondi = 0;
let intervallo = null;

// Elementi del DOM
const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const giroBtn = document.getElementById('giro');
const giriList = document.getElementById('giri-list');

// Funzione per aggiornare il display
function aggiornaDisplay() {
  const minutiStr = minuti.toString().padStart(2, '0');
  const secondiStr = secondi.toString().padStart(2, '0');
  const millisecondiStr = millisecondi.toString().padStart(2, '0');
  display.textContent = `${minutiStr}:${secondiStr}:${millisecondiStr}`;
}

// Funzione per avviare il cronometro
function startCronometro() {
  if (intervallo) return; // Evita di avviare più intervalli
  intervallo = setInterval(() => {
    millisecondi += 10;
    if (millisecondi === 1000) {
      millisecondi = 0;
      secondi++;
    }
    if (secondi === 60) {
      secondi = 0;
      minuti++;
    }
    aggiornaDisplay();
  }, 10); // Aggiorna ogni 10 millisecondi
}

// Funzione per fermare il cronometro
function stopCronometro() {
  clearInterval(intervallo);
  intervallo = null;
}

// Funzione per resettare il cronometro
function resetCronometro() {
  stopCronometro();
  minuti = 0;
  secondi = 0;
  millisecondi = 0;
  aggiornaDisplay();
  giriList.innerHTML = ''; // Svuota la lista dei giri
}

// Funzione per registrare un giro
function registraGiro() {
  const giro = document.createElement('li');
  giro.textContent = display.textContent;
  giriList.appendChild(giro);
}

// Event listeners per i pulsanti
startBtn.addEventListener('click', startCronometro);
stopBtn.addEventListener('click', stopCronometro);
resetBtn.addEventListener('click', resetCronometro);
giroBtn.addEventListener('click', registraGiro);

// Aggiorna il display inizialmente
aggiornaDisplay();