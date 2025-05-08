import { addTask, renderTasks } from './taskManager.js';

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const searchInput = document.getElementById('searchInput');
const statusFilter = document.getElementById('statusFilter');

// Aggiungi nuova task
addTaskBtn.addEventListener('click', () => {
    const name = taskInput.value.trim();
    if (name) {
        addTask(name);
        taskInput.value = '';
        updateView();
    }
});

// Aggiorna vista al cambiare filtro o ricerca
searchInput.addEventListener('input', updateView);
statusFilter.addEventListener('change', updateView);

function updateView() {
    renderTasks({
        status: statusFilter.value,
        search: searchInput.value
    });
}

// Render iniziale
updateView();