import { createTodo } from "./todo.js";

//Display for all tasks
const todoDisplay = (function() {
    const display = [];

    return {display};
})();


const test = createTodo("read", "read 100pgs", "01/05/24", "low");
const test2 = createTodo("cook", "make steak sammies", "02/07/24", "high");

function updateDisplay(task){
    todoDisplay.display.push(task);

    return todoDisplay.display;
}

updateDisplay(test);
updateDisplay(test2);

console.log(todoDisplay.display[1].todo.title);