document.getElementById("add-task").addEventListener("click", () => {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Введите задачу!");
        return;
    }

    const taskList = document.getElementById("task-list");
    const listItem = document.createElement("li");
    listItem.innerHTML = `${taskText} <button class="delete-btn">Удалить</button>`;

    taskList.appendChild(listItem);
    taskInput.value = "";

    listItem.querySelector(".delete-btn").addEventListener("click", () => {
        listItem.remove();
    });
});
