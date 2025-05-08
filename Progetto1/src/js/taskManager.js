// Array che contiene tutte le task
// Ogni elemento sarà un oggetto { id, name, state }
let tasks = [];

/**
 * Aggiunge una nuova task all’array
 * @param {string} name — il testo/nome della task
 */
export function addTask(name) {
    // Creo un oggetto task con:
    //  - id univoco basato sul timestamp corrente
    //  - name come passato
    //  - state iniziale = 'todo'
    tasks.push({
        id: Date.now(),
        name,
        state: 'todo'
    });
    // Dopo aver modificato l’array, ridisegno la lista nel DOM
    renderTasks();
}

/**
 * Rimuove una task dall’array filtrando per ID
 * @param {number} id — l’id della task da eliminare
 */
export function removeTask(id) {
    // Ricreo l’array tasks escludendo quella con id uguale a quello passato
    tasks = tasks.filter(task => task.id !== id);
    // Ridisegno la lista aggiornata
    renderTasks();
}

/**
 * Cambia lo stato di una singola task
 * @param {number} id — l’id della task da aggiornare
 * @param {string} newState — il nuovo stato ('todo','in-progress','completed')
 */
export function updateTaskState(id, newState) {
    // Trovo l’oggetto task corrispondente
    const task = tasks.find(t => t.id === id);
    if (task) {
        // Se trovato, sovrascrivo la proprietà state
        task.state = newState;
    }
    // Ridisegno la lista per riflettere il cambiamento di stato
    renderTasks();
}

/**
 * Modifica il nome di una task esistente
 * @param {number} id — l’id della task da rinominare
 * @param {string} newName — il nuovo nome inserito dall’utente
 */
export function editTask(id, newName) {
    // Trovo la task in base all’id
    const task = tasks.find(t => t.id === id);
    // Controllo che esista e che il nuovo nome non sia solo spazi vuoti
    if (task && newName.trim()) {
        // Assegno il nome ripulito da spazi iniziali/finali
        task.name = newName.trim();
    }
    // Ridisegno la lista con il nome aggiornato
    renderTasks();
}

/**
 * Mostra le task nel DOM applicando due filtri:
 *  - status: mostra tutte o solo quelle con uno stato specifico
 *  - search: mostra solo le task il cui nome contiene la stringa di ricerca
 *
 * @param {object}   options
 * @param {string}   options.status — 'all'|'todo'|'in-progress'|'completed'
 * @param {string}   options.search — testo da cercare all’interno del nome
 */
export function renderTasks({ status = 'all', search = '' } = {}) {
    // Seleziono l’elemento <ul> dove inserire le <li>
    const list = document.getElementById('tasks');
    // Svuoto il contenitore per ricostruirlo da zero
    list.innerHTML = '';

    tasks
        // 1) filtro per stato (se status==='all' salto il filtro)
        .filter(t => status === 'all' || t.state === status)
        // 2) filtro per contenuto del nome (case‑insensitive)
        .filter(t => t.name.toLowerCase().includes(search.toLowerCase()))
        // 3) per ciascuna task creo gli elementi DOM
        .forEach(task => {
            // Creo il <li> e gli do la classe in base allo stato
            const li = document.createElement('li');
            li.className = `task ${task.state}`;

            // Span che mostra il nome della task
            const nameSpan = document.createElement('span');
            nameSpan.textContent = task.name;

            // Contenitore per i controlli (select + bottoni)
            const actions = document.createElement('div');

            // SELECT per cambiare stato al volo
            const select = document.createElement('select');
            ['todo', 'in-progress', 'completed'].forEach(s => {
                const option = document.createElement('option');
                option.value = s;
                option.textContent =
                    s === 'todo' ? 'Da Fare' :
                    s === 'in-progress' ? 'In Corso' :
                    'Completata';
                // Se l’opzione corrisponde allo stato corrente, la seleziono
                if (task.state === s) option.selected = true;
                select.appendChild(option);
            });
            // Quando cambio select, aggiorno lo stato della task
            select.addEventListener('change', () => updateTaskState(task.id, select.value));

            // Bottone “Modifica” che apre un prompt per rinominare
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Modifica';
            editBtn.addEventListener('click', () => {
                const newName = prompt('Nuovo nome:', task.name);
                // Se l’utente non preme Annulla, chiamo editTask
                if (newName !== null) editTask(task.id, newName);
            });

            // Bottone “Elimina” che rimuove la task
            const delBtn = document.createElement('button');
            delBtn.textContent = 'Elimina';
            delBtn.addEventListener('click', () => removeTask(task.id));

            // Aggiungo select e bottoni al contenitore azioni
            actions.append(select, editBtn, delBtn);
            // Aggiungo lo span del nome e il contenitore azioni dentro il li
            li.append(nameSpan, actions);
            // Infine appendo il li alla lista UL nel DOM
            list.appendChild(li);
        });
}
