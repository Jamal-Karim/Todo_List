import { Todo } from "./todo.js";

//Project Logic
class Project extends Todo{
    constructor(proj, title, description, dueDate, priority){
        super(title, description, dueDate, priority);
        this.proj = proj;
    }
}

function createProject (proj){
    return {proj};
}

function createProjectTask (proj, title, description, dueDate, priority){
    return new Project(proj, title, description, dueDate, priority);
}

const proj1 = createProject("Gym");

const test = createProjectTask("studies","read", "read 100pgs", "01/05/24", "high");

const test2 = createProjectTask(proj1.proj, "run", "6 miles in the morning", "daily", "high");

console.log(test2);

