//Display for all tasks
export const todoDisplay = (function() {
    const display = [];

    return {display};
})();


export function updateDisplay(task){
    todoDisplay.display.push(task);

    for(let i = 0; i < todoDisplay.display.length; i++){

        if("proj" in todoDisplay.display[i]){
            console.log(todoDisplay.display[i].proj);
        }

        console.log(todoDisplay.display[i].title);
        console.log(todoDisplay.display[i].description);
    }
}

export function showDisplay(){

    for(let i = 0; i < todoDisplay.display.length; i++){

        if("proj" in todoDisplay.display[i]){
            console.log(todoDisplay.display[i].proj);
        }

        console.log(todoDisplay.display[i].title);
        console.log(todoDisplay.display[i].description);
    }
}

export function removeTask(task){
    const indexToRemove = todoDisplay.display.indexOf(task);

    todoDisplay.display.splice(indexToRemove, 1);

    showDisplay();
}