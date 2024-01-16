import {toggleTodoDisplay} from "./todo.js";
import {showProjectForm } from "./project.js";
import {showTaskDisplay, toggleTab } from "./display.js";

import './styles/main.css';

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        toggleTab(this);
    });
});

const projectContainer = document.querySelector(".projects");

const addButton = document.querySelector(".add");

const todoTab = document.getElementById("todo");

const addProjectBtn = document.querySelector(".projBtn");

//Todo Popup Form
addButton.addEventListener("click", toggleTodoDisplay);


todoTab.addEventListener("click", showTaskDisplay);


addProjectBtn.addEventListener("click", showProjectForm);
