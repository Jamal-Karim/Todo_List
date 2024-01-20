import {toggleTodoDisplay} from "./todo.js";
import {showProjectForm } from "./project.js";
import {showTaskDisplay, toggleTab, removeTask, showProjectDisplay, todoDisplay, showTaskInfo } from "./display.js";

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

const notesTab = document.querySelector(".note");

//Todo Popup Form
addButton.addEventListener("click", toggleTodoDisplay);

//Show Todo's On Display
todoTab.addEventListener("click", showTaskDisplay);

//Project Creation Form
addProjectBtn.addEventListener("click", showProjectForm);

//Removing Todo and Shwowing Display After
taskList.addEventListener("click", function(event){
    if(event.target.classList.contains("checkBtn")){
        var parent = event.target.parentNode;
        const task = parent.querySelector(".taskTitle").textContent;
        taskList.innerHTML = '';
        removeTask(task);
        console.log(todoDisplay.display);
    }
});

notesTab.addEventListener("click", function(){
    console.log("notes clicked");
})
