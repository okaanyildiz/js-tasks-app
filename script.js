const taskContainer = document.querySelector('.task-container');
const personalRadio = document.querySelector('#personal-radio');
const taskBox = document.querySelector('.task-box');

// Add a new task
function addTask() {
    task = document.createElement('li');
    task.classList.add('task');
    taskBox.prepend(task);

    task.innerHTML += `
            <div class="input-box">
                <input class="task-checkbox" type="checkbox">
                <span class="bubble ${personalRadio.checked ? 'personal-bubble' : ''}"></span>
                <label>${document.querySelector('#input').value}</label>
                <input type="text">
            </div>
            <div>
                <button class="delete-btn">DELETE</button>
            </div>
    `;

    // Clear the input
    document.querySelector('#input').value = '';

    // Delete tasks
    let currentTasks = document.querySelectorAll(".delete-btn");

    for (let i = 0; i < currentTasks.length; i++) {
        currentTasks[i].onclick = function () {
            this.parentNode.parentNode.remove();
        }
    }
}

// Add task with Add Task button
const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', addTask);

// Add task with Enter keypress
document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask()
    }
});

    // METHOD WITH ADDING PARENTS AND SIBLINGS

    // const task = document.createElement('li');
    // task.classList.add('task');
    // taskBox.prepend(task);

    // const inputBox = document.createElement('div');
    // inputBox.classList.add('input-box');
    // task.append(inputBox);

    // const taskCheckbox = document.createElement('input');
    // taskCheckbox.setAttribute('type', 'checkbox');
    // taskCheckbox.classList.add('task-checkbox');
    // inputBox.append(taskCheckbox);

    // const bubble = document.createElement('span');
    // bubble.classList.add('bubble');
    // inputBox.append(bubble);

    // const label = document.createElement('label');
    // label.innerText = `${document.querySelector('#input').value}`
    // inputBox.append(label);

    // const input = document.createElement('input');
    // input.setAttribute('type', 'text');
    // inputBox.append(input);

    // const buttonBox = document.createElement('div');
    // buttonBox.classList.add('button-box');
    // task.append(buttonBox);

    // const deleteBtn = document.createElement('button');
    // deleteBtn.classList.add('delete-btn');
    // deleteBtn.innerText = 'DELETE';
    // buttonBox.append(deleteBtn);

    // if (personalRadio.checked) {
    //     bubble.classList.add('personal-bubble');

    // }