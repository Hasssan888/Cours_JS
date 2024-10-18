
// window.localStorage.clear();

function getTasks() {
    let tasks = window.localStorage.getItem("tasks");
    
    if (tasks) {
        return JSON.parse(tasks); // إذا كانت هناك مهام مخزنة، قم بتحويلها من JSON إلى مصفوفة
    } else {
        return []; // إذا لم تكن هناك مهام مخزنة، أرجع مصفوفة فارغة
    }
}

function saveTasks(tasks)
{
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
}


function renderTasks()
{
    let tasks = getTasks();
    let taskList = document.querySelector(".my-div");
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        let taskItem = document.createElement("div");
        taskItem.innerHTML = `
        <p>${task}</p>
        <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        // Adding styles to the task item
        taskItem.style.width = "600px"; // Set the width of the task item
        taskItem.style.height = "50px"; // Set the height of the task item
        taskItem.style.margin = "10px auto"; // Center the item with margin
        taskItem.style.backgroundColor = "white"; // Set the background color
        taskItem.style.position = "relative"; // Positioning
        taskItem.style.borderRadius = "5px"; // Rounded corners
        taskItem.style.display = "flex"; // Use flexbox layout
        taskItem.style.alignItems = "center"; // Center items vertically
        taskItem.style.justifyContent = "space-between";

        // Adding styles for the paragraph inside the task item
        const taskParagraph = taskItem.querySelector("p");
        taskParagraph.style.fontSize = "22px"; // Set the font size for task description
        taskParagraph.style.margin = "10px"; // Remove default margin
        
        // Adding styles for the delete button
        const deleteButton = taskItem.querySelector(".delete-btn");
        deleteButton.style.backgroundColor = "red"; // Set button background color
        deleteButton.style.color = "white"; // Set button text color
        deleteButton.style.padding = "10px"; // Set padding for button
        deleteButton.style.border = "none"; // Remove border
        deleteButton.style.borderRadius = "5px"; // Round button corners
        deleteButton.style.fontWeight = "bold"; // Bold text
        deleteButton.style.cursor = "pointer"; // Change cursor on hover
        deleteButton.style.margin = "10px";

        // Append the styled task item to the task list
        taskList.appendChild(taskItem);
    });

};

function addTask(TextFormInp)
{
    if (!TextFormInp)
        return;
    let tasks = getTasks();
    tasks.push(TextFormInp);
    saveTasks(tasks);
    renderTasks();
}


document.querySelector(".add").onclick = function (e) {
    e.preventDefault();
    let TextFormInp = document.querySelector("#inp").value;
    addTask(TextFormInp);
    document.querySelector("#inp").value = ''; 
};


function deleteTask(index)
{
    let task = getTasks();

    task.splice(index, 1);

    saveTasks(task);
    renderTasks();
}

document.querySelector(".my-div").addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-btn"))
    {
        const index = e.target.dataset.index;
        deleteTask(index);
    }
})

window.onload = renderTasks();