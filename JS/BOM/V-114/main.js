



// دالة لاسترجاع المهام من localStorage أو إنشاء Array فارغ إذا كانت غير موجودة
function getTasks() {
    let tasks = window.localStorage.getItem("tasks");
    
    if (tasks) {
        return JSON.parse(tasks); // إذا كانت هناك مهام مخزنة، قم بتحويلها من JSON إلى مصفوفة
    } else {
        return []; // إذا لم تكن هناك مهام مخزنة، أرجع مصفوفة فارغة
    }
}


// دالة لتخزين المهام في localStorage
function saveTasks(tasks) {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
}

// دالة لتحديث واجهة المستخدم بالمهام المخزنة
function renderTasks() {
    let tasks = getTasks();
    const taskList = document.querySelector(".my-div");
    taskList.innerHTML = ''; // مسح المهام الحالية قبل إعادة العرض
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
}

// دالة لإضافة مهمة جديدة
function addTask(taskName) {
    if (!taskName) return; // التحقق من أن الحقل ليس فارغًا
    let tasks = getTasks();
    tasks.push(taskName);
    saveTasks(tasks);
    renderTasks(); // إعادة عرض المهام بعد الإضافة
}

// دالة لحذف مهمة بناءً على الفهرس
function deleteTask(index) {
    let tasks = getTasks();
    tasks.splice(index, 1); // حذف العنصر بناءً على الفهرس
    saveTasks(tasks);
    renderTasks(); // إعادة عرض المهام بعد الحذف
}

// حدث إضافة مهمة جديدة
document.querySelector(".add").onclick = function (e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    const taskName = document.querySelector("#inp").value;
    addTask(taskName);
    document.querySelector("#inp").value = ''; // إعادة تعيين الحقل
};

// حدث حذف مهمة باستخدام Event Delegation
document.querySelector(".my-div").addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        const index = e.target.dataset.index; // الحصول على الفهرس من data attribute
        deleteTask(index);
    }
});

// عرض المهام عند تحميل الصفحة
window.onload = renderTasks;

// myAdd.onclick = function (e) {
    
//     // e.preventDefault(); // hadi mohima hiya li ktmna3 event y5dmo
//     window.localStorage.setItem(".my-div", myTask);
//     let TextDiv = document.createTextNode(myInp.value);
    
//     console.log(myCreat);
//     mybtn.appendChild(myText);
//     myP.appendChild(TextDiv);
//     myCreat.appendChild(myP);
//     myCreat.appendChild(mybtn);
//     myTask.appendChild(myCreat);
//     /* ======================================= */
//     myCreat.style.width = "600px";
//     myCreat.style.height = "50px";
//     myCreat.style.margin = "10px auto"
//     myCreat.style.backgroundColor = "white";
//     myCreat.style.position = "rerelative";
//     myCreat.style.borderRadius = "5px";
//     myCreat.style.display = "flex";
//     myCreat.style.alignItems = "center"; 
//     // myCreat.style.justifyContent = "space-around"; //space-between space-around
    
    
//     // ========================================== //
//     mybtn.style.backgroundColor = "red";
//     mybtn.style.color = "white"; // for example, text color
//     mybtn.style.padding = "10px"; // adding padding
//     mybtn.style.border = "none"; // adding padding
//     mybtn.style.borderRadius = "5px"; // adding padding
//     mybtn.style.fontWeight = "bold"; // adding padding
//     // mybtn.style.marginLeft = " 50px";
//     mybtn.style.position = "fixed";
//     mybtn.style.right = "13.3%";
//     mybtn.style.top = "16.2%";
//     mybtn.style.cursor = "pointer";
    
//     /*===================================================*/
//     // myP.style.fontWeight = "600";
//     myP.style.fontSize = "25px";
//     myP.style.margin = "20px";
//     myP.style.marginBottom = "20px";
//     // myP.style.textAlign = "center";
    
    
    
//     document.body.appendChild(myTask);
// };


// // mybtn.onclick = function () {
// //     console.log("delete");
// // };