import {toggleTodoDisplay} from "./todo.js";
import {showProjectForm } from "./project.js";
import {showTaskDisplay, toggleTab, showProjectDisplay } from "./display.js";

import './styles/main.css';

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        toggleTab(this);
    });
});

const addButton = document.querySelector(".add");

const todoTab = document.getElementById("todo");

const addProjectBtn = document.querySelector(".projBtn");

const taskList = document.querySelector(".taskList");

//Todo Popup Form
addButton.addEventListener("click", toggleTodoDisplay);


todoTab.addEventListener("click", showTaskDisplay);


addProjectBtn.addEventListener("click", showProjectForm);

taskList.addEventListener("click", function(event){
    if(event.target.classList.contains("checkBtn")){
        console.log("button");
    }
});
