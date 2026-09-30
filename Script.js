function addTask() {

    let taskInput = document.getElementById("taskInput");

    let task = taskInput.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${task}</span>

        <div class="task-buttons">

            <button 
                class="complete-btn" 
                onclick="completeTask(this)">
                ✓
            </button>

            <button 
                class="delete-btn" 
                onclick="deleteTask(this)">
                ✕
            </button>

        </div>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}


function completeTask(button) {

    let task = button.parentElement.parentElement;

    task.classList.toggle("completed");

}


function deleteTask(button) {

    let task = button.parentElement.parentElement;

    task.remove();

}