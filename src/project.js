import { Project } from "./todo";
import { todoDisplay, toggleTab } from "./display";

//Creating Project Category
export function createProject(proj) {

    const p = document.createElement("p");
    p.classList.add("tab");
    p.classList.add("proj");
    p.textContent = proj;

    const projContainer = document.querySelector(".projects");
    projContainer.appendChild(p);

    projContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains('tab')) {
            toggleTab(event.target);
        }
    });

    console.log(todoDisplay.display);

    return { proj };
}

// Creating Task for Project Category
export function createProjectTask(proj, title, description, dueDate, priority) {
    return new Project(proj, title, description, dueDate, priority);
}

export function addProjectToList() {
    var projectTab = document.querySelector(".tab.proj.active");
    const project = createProjectTask(projectTab.textContent, document.getElementById("task").value, document.getElementById("description").value,
        document.getElementById("dueDate").value, document.getElementById("priority").value);

    console.log(project);
    todoDisplay.display.push(project);
    console.log(todoDisplay.display);
}

let isProjFormDisplayed = false;

export function projectInput() {

    const projForm = document.createElement("div");

    const label1 = document.createElement("label");
    label1.setAttribute("for", "project");
    label1.textContent = "Enter Your Project";
    projForm.appendChild(label1);

    const input1 = document.createElement("input");
    input1.type = "text";
    input1.id = "project";
    projForm.appendChild(input1);

    const inputBtns = document.createElement("div");

    const inputAdd = document.createElement("input");
    inputAdd.type = "button";
    inputAdd.value = "Add Project";
    inputAdd.addEventListener("click", () => {
        createProject(input1.value);
        form.remove();
        isProjFormDisplayed = false;
    })
    inputBtns.appendChild(inputAdd);

    const inputCancel = document.createElement("input");
    inputCancel.type = "button";
    inputCancel.value = "Cancel";
    inputCancel.addEventListener("click", () => {
        form.remove();
        isProjFormDisplayed = false;
    })
    inputBtns.appendChild(inputCancel);

    inputBtns.classList.add("inputBtns");
    projForm.appendChild(inputBtns);
    projForm.classList.add("projectInputContainer");

    const form = document.createElement("form");
    form.appendChild(projForm);

    return form;
}

export function showProjectForm() {
    if (!isProjFormDisplayed) {
        const body = document.querySelector("body");
        body.appendChild(projectInput());
        isProjFormDisplayed = true;
    }
}


//Showing Display for Certain Project
export function showProjectDisplay(projectType) {
    for (let i = 0; i < todoDisplay.display.length; i++) {

        if ("proj" in todoDisplay.display[i]) {
            if (todoDisplay.display[i].proj === projectType) {
                console.log(todoDisplay.display[i]);
            }
        }
    }
}


//Removing Project and All Tasks With it
export function removeProject(projectType) {
    for (let i = todoDisplay.display.length - 1; i >= 0; i--) {
        if ("proj" in todoDisplay.display[i] && todoDisplay.display[i].proj === projectType) {
            todoDisplay.display.splice(i, 1);
        }
    }
}
