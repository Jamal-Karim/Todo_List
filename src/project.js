import { todoDisplay } from "./display.js";
import { Todo } from "./todo.js";

//Project Logic
class Project extends Todo{
    constructor(proj, title, description, dueDate, priority){
        super(title, description, dueDate, priority);
        this.proj = proj;
    }
}

//Creating Project Category
export function createProject (proj){
    return {proj};
}

//Creating Task for Project Category
export function createProjectTask (proj, title, description, dueDate, priority){
    return new Project(proj, title, description, dueDate, priority);
}


//Showing Display for Certain Project
export function showProjectDisplay(projectType){
    for(let i = 0; i < todoDisplay.display.length; i++){

        if("proj" in todoDisplay.display[i]){
            if(todoDisplay.display[i].proj === projectType){
                console.log(todoDisplay.display[i]);
            }
        }
    }
}


//Removing Project and All Tasks With it
export function removeProject(projectType){
    for (let i = todoDisplay.display.length - 1; i >= 0; i--) {
        if ("proj" in todoDisplay.display[i] && todoDisplay.display[i].proj === projectType) {
            todoDisplay.display.splice(i, 1);
        }
    }
}
