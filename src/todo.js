import { updateDisplay, todoDisplay } from "./display";

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
let isFormDisplayed = false;

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

    //Adding todo logic

    const inputSubmit = document.createElement("input");
    inputSubmit.type = "button";
    inputSubmit.value = "Add To List";
    inputSubmit.addEventListener("click", () =>{
        AddTodoToList();
        form.remove();
        isFormDisplayed = false;
    });
    inputBtns.appendChild(inputSubmit);

    const inputCancel = document.createElement("input");
    inputCancel.type = "button";
    inputCancel.value = "Cancel";
    inputCancel.addEventListener("click", () => {
        form.remove();
        isFormDisplayed = false;
        console.log("removed");
    })
    inputBtns.appendChild(inputCancel);

    inputBtns.classList.add("inputBtns")
    formContainer.appendChild(inputBtns);
    formContainer.classList.add("formContainer");

    const form = document.createElement("form");
    form.appendChild(formContainer);

    return form;
}

export function toggleTodoDisplay() {
    if (!isFormDisplayed) {
        const body = document.querySelector("body");
        body.appendChild(TodoInput());
        isFormDisplayed = true;
    }
}

export { isFormDisplayed };

//Creating the Todo
export function AddTodoToList() {
    const todo = createTodo(document.getElementById("task").value, document.getElementById("description").value,
        document.getElementById("dueDate").value, document.getElementById("priority").value);
        
    console.log(todo);

    todoDisplay.display.push(todo);

    console.log(todoDisplay.display);

    //creating dynamic task
    const mainTaskList = document.querySelector(".taskList");

    const div = document.createElement("div");
    div.classList.add("task");

    const title = document.createElement("p");
    title.classList.add("taskTitle");
    title.textContent = todo.title;
    div.appendChild(title);

    const date = document.createElement("p");
    date.classList.add("dueDate");
    date.textContent = todo.dueDate;
    div.appendChild(date);

    const checkBtn = document.createElement("button");
    checkBtn.classList.add("checkBtn");
    div.appendChild(checkBtn);

    mainTaskList.appendChild(div);

    return mainTaskList;
}

