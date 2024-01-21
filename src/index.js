import {toggleTodoDisplay} from "./todo.js";
import {showProjectForm } from "./project.js";
import {showTaskDisplay, toggleTab, removeTask, showProjectDisplay, todoDisplay, showTaskInfo, showNotesDisplay, removeNote, notesDisplay } from "./display.js";
import { showNotesForm } from "./notes.js";

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

//Todo and Notes Popup Form
addButton.addEventListener("click", function(){
    if(notesTab.classList.contains("active")){
        showNotesForm();
        console.log("notes active");
    }
    else{
        toggleTodoDisplay();
    }
});

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

taskList.addEventListener("click", function(event){
    if(event.target.classList.contains("cancelNotes")){
        var parent = event.target.parentNode;
        const note = parent.querySelector("p").textContent;
        taskList.innerHTML = '';
        removeNote(note);
        console.log(notesDisplay.display);
    }
})

//Removing Notes and Showing Display After
notesTab.addEventListener("click", function(event){
    showNotesDisplay();
    console.log(event.target);
    console.log("notes clicked");
})
