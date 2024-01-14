import { createTodo, TodoInput, toggleTodoDisplay, isFormDisplayed} from "./todo.js";
import { createProject, createProjectTask, showProjectDisplay, removeProject, projectInput, showProjectForm } from "./project.js";
import { todoDisplay, updateDisplay, removeTask, showTaskDisplay, toggleTab } from "./display.js";

import './styles/main.css';

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        toggleTab(this);
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     // Get the add button
//     var addButton = document.querySelector(".add");

//     // Add a click event listener to the add button
//     addButton.addEventListener("click", function () {
//         // Check if a project tab has the "active" class
//         var projectTab = document.querySelector(".tab.proj.active");

//         if (projectTab) {
//             // Do something when a project tab with the "active" class is found
//             console.log(projectTab.textContent);
//         }
//         else{
//             console.log("not project");
//         }
//     });
// });

const projectContainer = document.querySelector(".projects");

const addButton = document.querySelector(".add");

const todoTab = document.getElementById("todo");

const addProjectBtn = document.querySelector(".projBtn");

//Todo Popup Form
addButton.addEventListener("click", toggleTodoDisplay);


todoTab.addEventListener("click", showTaskDisplay);


addProjectBtn.addEventListener("click", showProjectForm);





// const test = createTodo("read", "read 100pgs", "01/05/24", "low");

// updateDisplay(test);

// const proj1 = createProject("Gym");

// const projtask = createProjectTask(proj1.proj, "run", "6 miles in the morning", "daily", "high");

// updateDisplay(projtask);

// const projtask2 = createProjectTask(proj1.proj, "lift", "push day", "daily", "medium");

// updateDisplay(projtask2);

// console.log(todoDisplay.display);