let tasks = [];

// Menambahkan Task
const addTask = () => {
    const taskInput = document.getElementById("task-input");
    const text = taskInput.value.trim();
    
    if (text === "") {
        alert("Tolong ketikkan sesatu!");
        updateStats();
    } else {
        tasks.push({ text: text, completed: false });
        taskInput.value = "";
        updateTasksList();
        updateStats();
    }
};
// Menambahkan Task

// Menandai Tugas Selesai atau belum
const toggleTaskComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    updateTasksList();
    updateStats();
};
// Menandai Tugas Selesai atau belum

// Delete Task
const deleteTask = (index) => {
    tasks.splice(index, 1);
    updateTasksList();
    updateStats();
};
// Delete Task

// Edit Task
const editTask = (index) => {
    const taskInput = document.getElementById("task-input");
    taskInput.value = tasks[index].text;

    tasks.splice(index, 1);
    updateTasksList();
    updateStats();
};
// Edit Task

// Progress Bar
const updateStats = () => {
    const completeTasks = tasks.filter((task) => task.completed).length;
    const totalTasks = tasks.length;
    const progress = (completeTasks / totalTasks) * 100;
    const progressBar = document.getElementById("progress");
    
    progressBar.style.width = `${progress}%`;
    
    document.getElementById(
        "numbers"
    ).innerText = `${completeTasks} / ${totalTasks}`;
};
// Progress Bar

// Menampilkan Input
const updateTasksList = () => {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
		<div class="taskItem">
        	<div class="task ${task.completed ? "completed" : ""}">
            	<input type="checkbox" id="checkbox" class="checkbox" ${
                    task.completed ? "checked" : ""
                }/>
            	<p>${task.text}</p>
        	</div>
        	<div class="icons">
            	<img src="./img/edit.png" onClick="editTask(${index})" />
            	<img src="./img/bin.png" onClick="deleteTask(${index})" />
        	</div>
    	</div>
		`;
        listItem.addEventListener("change", () => toggleTaskComplete(index));
        taskList.append(listItem);
    });
};
// Menampilkan Input

// Fungsi untuk button add
document.getElementById("new-task").addEventListener("click", function (e) {
    e.preventDefault();
    
    addTask();
});
// Fungsi untuk button add
