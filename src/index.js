import { createTodo, TodoInput, toggleTodoDisplay, isFormDisplayed} from "./todo.js";
import { createProject, createProjectTask, showProjectDisplay, removeProject } from "./project.js";
import { todoDisplay, updateDisplay, removeTask, showTaskDisplay, toggleActive } from "./display.js";

import './styles/main.css';

toggleActive();

const addButton = document.querySelector(".add");

//Todo Popup Form

addButton.addEventListener("click", toggleTodoDisplay);

const todoTab = document.getElementById("todo");

todoTab.addEventListener("click", showTaskDisplay);





// const test = createTodo("read", "read 100pgs", "01/05/24", "low");

// updateDisplay(test);

// const proj1 = createProject("Gym");

// const projtask = createProjectTask(proj1.proj, "run", "6 miles in the morning", "daily", "high");

// updateDisplay(projtask);

// const projtask2 = createProjectTask(proj1.proj, "lift", "push day", "daily", "medium");

// updateDisplay(projtask2);

// console.log(todoDisplay.display);