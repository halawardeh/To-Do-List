window.onload = function () {
    ViewTasks();
};
var counter = JSON.parse(localStorage.getItem('counter') || '1');
localStorage.setItem('counter', JSON.stringify(counter));
function AddTaskRow() {
    var _a, _b;
    var tableBody = document.getElementById("TableBody");
    var addTaskRow = (_b = (_a = document.getElementById("AddTaskBtn")) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
    if (!tableBody || !addTaskRow)
        return;
    var newRow = document.createElement("tr");
    newRow.classList.add("TaskRow");
    var nameInput = createInput("text");
    var statusInput = createInput("text");
    var startDateInput = createInput("date");
    var endDateInput = createInput("date");
    nameInput.id = "name";
    statusInput.id = "status";
    startDateInput.id = "sDate";
    endDateInput.id = "eDate";
    var addButton = document.createElement("button");
    addButton.textContent = "Add";
    addButton.addEventListener('click', function () { return AddTask(); });
    newRow.innerHTML = "\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n    ";
    newRow.cells[0].appendChild(nameInput);
    newRow.cells[1].appendChild(statusInput);
    newRow.cells[2].appendChild(startDateInput);
    newRow.cells[3].appendChild(endDateInput);
    newRow.cells[4].appendChild(addButton);
    tableBody.insertBefore(newRow, addTaskRow);
}
function createInput(type, placeholder) {
    if (placeholder === void 0) { placeholder = ""; }
    var input = document.createElement("input");
    input.type = type;
    input.placeholder = placeholder;
    return input;
}
function AddTask() {
    var inputName = document.getElementById("name").value;
    var statusInput = document.getElementById("status").value;
    var startDateInput = document.getElementById("sDate").value;
    var endDateInput = document.getElementById("eDate").value;
    var newTask = {
        id: counter,
        name: inputName,
        status: statusInput,
        startDate: startDateInput,
        endDate: endDateInput
    };
    var tasks = JSON.parse(localStorage.getItem('Tasks') || '[]');
    tasks.push(newTask);
    localStorage.setItem("Tasks", JSON.stringify(tasks));
    alert('Task Added Successfully');
    // تحديث الجدول بعد الإضافة
    ViewTasks();
}
function ViewTasks() {
    var _a, _b;
    var tableBody = document.getElementById("TableBody");
    var tasks = JSON.parse(localStorage.getItem('Tasks') || '[]');
    var addTaskRow = (_b = (_a = document.getElementById("AddTaskBtn")) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
    if (!tableBody || !addTaskRow)
        return;
    tableBody.innerHTML = '';
    tableBody === null || tableBody === void 0 ? void 0 : tableBody.appendChild(addTaskRow);
    for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
        var element = tasks_1[_i];
        var newRow = document.createElement("tr");
        newRow.classList.add("TaskRow");
        newRow.innerHTML = "\n    \n        <td>".concat(element.name, "</td>\n        <td>").concat(element.status, "</td>\n        <td>").concat(element.startDate, "</td>\n        <td>").concat(element.endDate, "</td>\n        <td><button>Delete</button></td>\n        \n    ");
        tableBody === null || tableBody === void 0 ? void 0 : tableBody.insertBefore(newRow, addTaskRow);
        // tableBody?.appendChild(newRow);
    }
}
