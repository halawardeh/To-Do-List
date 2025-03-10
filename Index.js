var counter = 0;
function AddTaskRow() {
    var tableBody = document.getElementById("TableBody");
    if (!tableBody)
        return;
    var newRow = document.createElement("tr");
    newRow.classList.add("TaskRow");
    var nameInput = createInput("text", "Task Name");
    var statusInput = createInput("text", "Status");
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
    tableBody.appendChild(newRow);
    AddTask();
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
        id: counter++,
        name: inputName,
        status: statusInput,
        startDate: startDateInput,
        endDate: endDateInput
    };
    var tasks = JSON.parse(localStorage.getItem('Tasks') || '[])');
    tasks.push(newTask);
    localStorage.setItem("Tasks", JSON.stringify(tasks));
    alert('Task Added Sucessfully');
}
