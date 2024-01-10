//TODO Logic
export class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export function createTodo(title, description, dueDate, priority) {
    return new Todo(title, description, dueDate, priority);
}

//Popup Form for Todo Task
export function TodoInput() {

    const formContainer = document.createElement("div");

    // Task Title
    const label1 = document.createElement("label");
    label1.setAttribute("for", "task");
    label1.textContent = "Task:";
    formContainer.appendChild(label1);

    const input1 = document.createElement("input");
    input1.type = "text";
    input1.id = "task";
    input1.placeholder = "Enter task";
    formContainer.appendChild(input1);

    // Task Description
    const label2 = document.createElement("label");
    label2.setAttribute("for", "description");
    label2.textContent = "Description:";
    formContainer.appendChild(label2);

    const input2 = document.createElement("input");
    input2.type = "text";
    input2.id = "description";
    input2.placeholder = "Enter description";
    formContainer.appendChild(input2);

    // Due Date
    const label3 = document.createElement("label");
    label3.setAttribute("for", "dueDate");
    label3.textContent = "Due Date:";
    formContainer.appendChild(label3);

    const input3 = document.createElement("input");
    input3.type = "date";
    input3.id = "dueDate";
    input3.placeholder = "Enter due date";
    formContainer.appendChild(input3);

    // Priority
    const label4 = document.createElement("label");
    label4.setAttribute("for", "priority");
    label4.textContent = "Priority:";
    formContainer.appendChild(label4);

    const selectPriority = document.createElement("select");
    selectPriority.id = "priority";
    //  formContainer.appendChild(selectPriority);

    const option1 = document.createElement("option");
    option1.value = "";
    option1.disabled = true;
    option1.selected = true;
    option1.textContent = "Select Priority";
    selectPriority.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = "high";
    option2.textContent = "High";
    selectPriority.appendChild(option2);

    const option3 = document.createElement("option");
    option3.value = "medium";
    option3.textContent = "Medium";
    selectPriority.appendChild(option3);

    const option4 = document.createElement("option");
    option4.value = "low";
    option4.textContent = "Low";
    selectPriority.appendChild(option4);

    formContainer.appendChild(selectPriority);

    const inputBtns = document.createElement("div");

    const inputSubmit = document.createElement("input");
    inputSubmit.type = "button";
    inputSubmit.value = "Add To List";
    inputBtns.appendChild(inputSubmit);

    const inputCancel = document.createElement("input");
    inputCancel.type = "button";
    inputCancel.value = "Cancel";
    inputCancel.addEventListener("click", () =>{
        form.remove();
    })
    inputBtns.appendChild(inputCancel);

    inputBtns.classList.add("inputBtns")
    formContainer.appendChild(inputBtns);
    formContainer.classList.add("formContainer");

    const form = document.createElement("form");
    form.appendChild(formContainer);

    return form;
}
