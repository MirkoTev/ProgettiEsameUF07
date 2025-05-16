# Parziale n° 1 UF07 - Pietro Rocchio
Questo repository contiene il progetto finale del modulo UF07: Web 1.  
Il progetto è suddiviso in tre sotto-progetti distinti, ognuno con funzionalità e obiettivi specifici. Due di questi sono stati completati con le funzionalità avanzate, mentre il terzo sarà sviluppato in un secondo momento.


## Contenuto del Progetto:


### Task Manager
Una  Web App per la gestione delle attività personali o professionali.

#### Funzionalità Implementate
- Inserimento e rimozione delle attività.
- Modifica del nome di un attività.
- Gestione dello stato di ogni attività:
  - Da fare
  - In corso
  - Comletata
- Filtro delle attività per stato.
- ricerca Attività per nome.
- Interfaccia semplice e reattiva.

#### Tecnologie Utilizzate
- HTML, CSS, JavaScript.


----


### Cronometro Digitale
Un' applicazione per misurare il tempo, utile per lo studio, il lavoro, monitorare attività sportive.

#### Funzionalità Implementate
- Pulsanti: Start, Stop, Reset.
- Visualizzatore tempo nel formato *MM:SS:MS*.
- Pulsante Giro per salvare i tempi parziali.
- Visualizzazione dinamica della lista dei giri.

#### Tecnologie Utilizzate
- HTML, CSS, JavaScript.
- Uso di "SetInterval()" per il ontrollo del tempo


----


### Meteo 
Una Web App che consente di ricavare il meteo in base alla posizione in cui sei, oppure inserendo la latitudine e la longitudine *in decimali* del luogo a cui ti interessa sapere il meteo.

#### Funzionalità Implementate
- Geocalizzazione: Recupero automatico della posizione attuale dell'utente tramite le API JavaScript `navigator.geolocation`.
- Ricerca manuale: Inserimento di latitudine e longitudine *in decimale* per visualizzare il meteo di qualsiasi località.
- Chiamata API esterna:  Utilizzo dell'API di [Open-Meteo](https://open-meteo.com/) per ottenere i dati meteo in tempo reale.
- Visualizzazione dati meteo:
  - Temperatura
  - Umidità
  - Precipitazioni
  - Copertura 
  - Velocità del vento
  - Codice meteo
- Icone meteo dinamiche: Mostra un immagine diversa in base al 'weather_code' restituito dall'API.

#### Tecnologie Utilizzate
- HTML, CSS, JavaScript.
- APi Open-Meteo
- Icone personalizzate



## Struttura del Progetto
PROGETTIESAMEUF7
  -Progetto1
      -src
          -css
              -reset.css
              -styles.css
          -js
              app.js
              filter.js
              taskManager.js
          -index.html
  -Progetto2
      -src
          -css
              -styles.css
          -js
              -cronometro.js
          -index.hmtl
  -Progetto3
      -immagini
      -src
          -css
              -styles.css
          -js
              -meteo.js
          -index.html
  -README.md



## Contribuire
Contributi, suggerimenti o segnalazioni di bug sono benvenuti! Sentiti libero di aprire una Issue o un Pull Request


## Contatti
Per domande o feedback, puoi contattarmi a [mirko.tevini@mat.tn.it]


## Ringraziamenti
Grazie per aver visitato questo progetto! Se ti è stato utile o semplicemente piacuto, lascia un bel feedback e condividilo con altri!



