type Task = {
    id: number;
    name: string;
    status: string;
    startDate: string;
    endDate: string;
};

window.onload = function(){
    ViewTasks();
};

let counter: number = JSON.parse(localStorage.getItem('counter') || '1');
localStorage.setItem('counter', JSON.stringify(counter));

function AddTaskRow() {
    const tableBody = document.getElementById("TableBody");
    const addTaskRow = document.getElementById("AddTaskBtn")?.parentElement?.parentElement;
    if (!tableBody || !addTaskRow) return;


    const newRow = document.createElement("tr");
    newRow.classList.add("TaskRow");

    const nameInput = createInput("text");
    const statusInput = createInput("text");
    const startDateInput = createInput("date");
    const endDateInput = createInput("date");

    nameInput.id = "name";
    statusInput.id = "status";
    startDateInput.id = "sDate";
    endDateInput.id = "eDate";

    const addButton = document.createElement("button");
    addButton.textContent = "Add";
    addButton.addEventListener('click', () => AddTask());

    newRow.innerHTML = `
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    `;

    newRow.cells[0].appendChild(nameInput);
    newRow.cells[1].appendChild(statusInput);
    newRow.cells[2].appendChild(startDateInput);
    newRow.cells[3].appendChild(endDateInput);
    newRow.cells[4].appendChild(addButton);

    tableBody.insertBefore(newRow, addTaskRow);


}

function createInput(type: string, placeholder: string = ""): HTMLInputElement {
    const input = document.createElement("input");
    input.type = type;
    input.placeholder = placeholder;
    return input;
}
function AddTask() {
    const inputName = (document.getElementById("name") as HTMLInputElement).value;
    const statusInput = (document.getElementById("status") as HTMLInputElement).value;
    const startDateInput = (document.getElementById("sDate") as HTMLInputElement).value;
    const endDateInput = (document.getElementById("eDate") as HTMLInputElement).value;

    const newTask: Task = {
        id: counter,
        name: inputName,
        status: statusInput,
        startDate: startDateInput,
        endDate: endDateInput
    };

    const tasks: Task[] = JSON.parse(localStorage.getItem('Tasks') || '[]');
    tasks.push(newTask);
    localStorage.setItem("Tasks", JSON.stringify(tasks));

    alert('Task Added Successfully');

    // تحديث الجدول بعد الإضافة
    ViewTasks();
}



function ViewTasks(){

    const tableBody = document.getElementById("TableBody");
    const tasks: Task[] = JSON.parse(localStorage.getItem('Tasks') || '[]');
    const addTaskRow=document.getElementById("AddTaskBtn")?.parentElement?.parentElement;

    if (!tableBody || !addTaskRow) return;
    
    tableBody.innerHTML = '';
    tableBody?.appendChild(addTaskRow);

for (const element of tasks) {
    const newRow = document.createElement("tr");
    newRow.classList.add("TaskRow");

    newRow.innerHTML = `
    
        <td>${element.name}</td>
        <td>${element.status}</td>
        <td>${element.startDate}</td>
        <td>${element.endDate}</td>
        <td><button>Delete</button></td>
        
    `;


    tableBody?.insertBefore(newRow, addTaskRow);

    // tableBody?.appendChild(newRow);
} 
}