//Notes Logic
export class Note {
    constructor(description) {
        this.description = description;
    }
}

//Creating a Note
export function createNote(description) {
    return new Note(description);
}

//Notes Display Array
export const notesDisplay = (function () {
    const display = [];

    return { display };
})();

//Notes Form Logic
let isNotesFormDisplayed = false;

export function createNoteForm() {

    const noteDiv = document.createElement("div");
    noteDiv.classList.add('notesForm');

    const form = document.createElement("form");

    const label = document.createElement("label");
    label.textContent = "Enter Note : ";
    form.appendChild(label);

    const input = document.createElement("input");
    input.type = 'text';
    form.appendChild(input);

    const inputBtns = document.createElement("div");

    const inputAdd = document.createElement("input");
    inputAdd.type = "button";
    inputAdd.value = "Add Note";

    inputAdd.addEventListener("click", function () {
        AddNote(createNote(input.value));
        noteDiv.remove();
        isNotesFormDisplayed = false;
        console.log(notesDisplay.display);
    });

    inputBtns.appendChild(inputAdd);

    const inputCancel = document.createElement("input");
    inputCancel.type = "button";
    inputCancel.value = "Cancel";

    inputCancel.addEventListener("click", function () {
        noteDiv.remove();
        isNotesFormDisplayed = false;
    })

    inputBtns.appendChild(inputCancel);

    inputBtns.classList.add('noteInputBtns')
    form.appendChild(inputBtns);

    noteDiv.appendChild(form);

    return noteDiv;

}

export function showNotesForm() {
    if (!isNotesFormDisplayed) {
        const body = document.querySelector("body");
        body.appendChild(createNoteForm());
        isNotesFormDisplayed = true;
    }
}

export function AddNote(note) {
    notesDisplay.display.push(note);

    const noteDisplay = document.createElement("div");
    noteDisplay.classList.add("notesDisplay");

    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancelNotes");
    cancelBtn.textContent = "X";
    noteDisplay.appendChild(cancelBtn);

    const description = document.createElement("p");
    description.textContent = note.description;
    noteDisplay.appendChild(description);

    const mainTaskList = document.querySelector(".taskList");
    mainTaskList.appendChild(noteDisplay);

    return mainTaskList;
}

export function showNotesDisplay() {
    const mainTaskList = document.querySelector(".taskList");
    for (let i = 0; i < notesDisplay.display.length; i++) {
        const noteDisplay = document.createElement("div");
        noteDisplay.classList.add("notesDisplay");

        const cancelBtn = document.createElement("button");
        cancelBtn.classList.add("cancelNotes");
        cancelBtn.textContent = "X";
        noteDisplay.appendChild(cancelBtn);

        const description = document.createElement("p");
        description.textContent = notesDisplay.display[i].description;
        noteDisplay.appendChild(description);

        mainTaskList.appendChild(noteDisplay);
    }
    return mainTaskList;
}