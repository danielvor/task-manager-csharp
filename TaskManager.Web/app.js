const API_URL = '/api/Tasks'; // URL base relativa para nossa Web API (ideal para deploy ou porta unificada)
const taskForm = document.getElementById('taskForm');
const taskTitleInput = document.getElementById('taskTitle');
const taskList = document.getElementById('taskList');
const taskCountElement = document.getElementById('taskCount');

// Estado das Tarefas
let tasks = [];

// Escuta evento de Submit do formulário
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = taskTitleInput.value.trim();
    if (title) {
        await addTask(title);
        taskTitleInput.value = ''; // limpa o input
    }
});

// Busca todas as tarefas da API
async function fetchTasks() {
    try {
        const response = await fetch(API_URL);
        if (response.ok) {
            tasks = await response.json();
            renderTasks();
        } else {
            console.error('Erro ao buscar tarefas', response.statusText);
        }
    } catch (error) {
        console.error('Erro de conexão:', error);
    }
}

// Cria uma nova tarefa na API
async function addTask(title) {
    const newTask = {
        title: title,
        isCompleted: false
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        });

        if (response.ok) {
            const createdTask = await response.json();
            // Adiciona no topo da lista
            tasks.unshift(createdTask);
            renderTasks();
        }
    } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
    }
}

// Atualiza o status de concluído de uma tarefa
async function toggleTaskStatus(id, isCompleted) {
    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex === -1) return;

    // Clona o item para enviar atualização completa
    const updatedTask = { ...tasks[taskIndex], isCompleted: isCompleted };

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        });

        if (response.ok || response.status === 204) {
            tasks[taskIndex].isCompleted = isCompleted;
            renderTasks();
        }
    } catch (error) {
        console.error('Erro ao atualizar tarefa:', error);
    }
}

// Deleta uma tarefa da API
async function deleteTask(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        if (response.ok || response.status === 204) {
            tasks = tasks.filter(t => t.id !== id);
            renderTasks();
        }
    } catch (error) {
        console.error('Erro ao excluir tarefa:', error);
    }
}

// Renderiza a lista de tarefas no HTML
function renderTasks() {
    taskList.innerHTML = '';
    taskCountElement.textContent = tasks.length;

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.isCompleted ? 'completed' : ''}`;

        li.innerHTML = `
            <div class="task-content">
                <input type="checkbox" class="checkbox-custom" 
                    ${task.isCompleted ? 'checked' : ''} 
                    onchange="toggleTaskStatus(${task.id}, this.checked)">
                <span class="task-title">${task.title}</span>
            </div>
            <button class="btn-delete" onclick="deleteTask(${task.id})" title="Excluir">
                <i class="fas fa-trash"></i>
            </button>
        `;

        taskList.appendChild(li);
    });
}

// Inicializa a aplicação
fetchTasks();
