//Showing Which Tab User is On
export function toggleTab(clickedTab) {

    var tabs = document.querySelectorAll('.tab');
    const mainTaskList = document.querySelector(".taskList");
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
        mainTaskList.innerHTML = '';
    });


    clickedTab.classList.add('active');
}


//Display for all tasks
export const todoDisplay = (function () {
    const display = [];

    return { display };
})();


export function updateDisplay(task) {
    todoDisplay.display.push(task);

    for (let i = 0; i < todoDisplay.display.length; i++) {

        if ("proj" in todoDisplay.display[i]) {
            console.log(todoDisplay.display[i].proj);
        }

        console.log(todoDisplay.display[i].title);
        console.log(todoDisplay.display[i].description);
    }
}

export function showTaskDisplay() {
    console.log(todoDisplay.display);

    const mainTaskList = document.querySelector(".taskList");

    for (let i = 0; i < todoDisplay.display.length; i++) {
        const div = document.createElement("div");
        div.classList.add("task");

        const title = document.createElement("p");
        title.classList.add("taskTitle");
        title.textContent = todoDisplay.display[i].title;
        div.appendChild(title);

        if ("proj" in todoDisplay.display[i]) {
            const projCategory = document.createElement("p");
            projCategory.classList.add("projTitle");
            projCategory.textContent = todoDisplay.display[i].proj;
            div.appendChild(projCategory);
            console.log(todoDisplay.display[i].proj);
        }

        const date = document.createElement("p");
        date.classList.add("dueDate");
        date.textContent = todoDisplay.display[i].dueDate;
        div.appendChild(date);

        const checkBtn = document.createElement("button");
        checkBtn.classList.add("checkBtn");
        div.appendChild(checkBtn);

        mainTaskList.appendChild(div);
    }
    return mainTaskList;
}

//Showing Display for Certain Project
export function showProjectDisplay(projectType) {
    for (let i = 0; i < todoDisplay.display.length; i++) {

        if ("proj" in todoDisplay.display[i]) {
            if (todoDisplay.display[i].proj === projectType) {

                const mainTaskList = document.querySelector(".taskList");

                const div = document.createElement("div");
                div.classList.add("task");

                const title = document.createElement("p");
                title.classList.add("taskTitle");
                title.textContent = todoDisplay.display[i].title;
                div.appendChild(title);

                const date = document.createElement("p");
                date.classList.add("dueDate");
                date.textContent = todoDisplay.display[i].dueDate;
                div.appendChild(date);

                const checkBtn = document.createElement("button");
                checkBtn.classList.add("checkBtn");
                div.appendChild(checkBtn);

                mainTaskList.appendChild(div);
                return mainTaskList;

            }
        }
    }
}

export function removeTask(task) {
    const indexToRemove = todoDisplay.display.indexOf(task);

    todoDisplay.display.splice(indexToRemove, 1);

    showDisplay();
}