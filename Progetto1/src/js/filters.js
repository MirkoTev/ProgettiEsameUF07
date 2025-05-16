import { renderTasks } from './taskManager.js';

const searchInput = document.getElementById('searchInput');
const statusFilter = document.getElementById('statusFilter');

// Funzione per aggiornare la lista in base a search e filter
function updateView() {
    renderTasks({
        status: statusFilter.value,
        search: searchInput.value
    });
}

// Event listeners per ricerca e filtro
searchInput.addEventListener('input', updateView);
statusFilter.addEventListener('change', updateView);

// Render iniziale
updateView();