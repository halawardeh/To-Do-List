type Task = {
    id: number;
    name: string;
    status: string;
    startDate: string;
    endDate: string;
};
 let counter:number=0;
function AddTaskRow() {
    const tableBody = document.getElementById("TableBody");
    if (!tableBody) return;

    const newRow = document.createElement("tr");
    newRow.classList.add("TaskRow");

    const nameInput = createInput("text", "Task Name");
    const statusInput = createInput("text", "Status");
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

    tableBody.appendChild(newRow);
AddTask();
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
        id: counter++,
        name: inputName,
        status: statusInput,
        startDate: startDateInput,
        endDate: endDateInput
    }


    const tasks: Task[] = JSON.parse(localStorage.getItem('Tasks') || '[])');

    tasks.push(newTask);

    localStorage.setItem("Tasks", JSON.stringify(tasks));
    alert('Task Added Sucessfully');

    

}
