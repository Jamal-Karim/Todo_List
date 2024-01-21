//Notes Logic
export class Note {
    constructor(description) {
        this.description = description;
    }
}

export function createNote(description) {
    return new Note(description);
}

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
    
    inputAdd.addEventListener("click", function(){
        noteDiv.remove();
        isNotesFormDisplayed = false;
    });

    inputBtns.appendChild(inputAdd);

    const inputCancel = document.createElement("input");
    inputCancel.type = "button";
    inputCancel.value = "Cancel";

    inputCancel.addEventListener("click", function(){
        noteDiv.remove();
        isNotesFormDisplayed = false;
    })

    inputBtns.appendChild(inputCancel);

    inputBtns.classList.add('noteInputBtns')
    form.appendChild(inputBtns);

    noteDiv.appendChild(form);

    return noteDiv;

}

export function showNotesForm(){
    if (!isNotesFormDisplayed) {
        const body = document.querySelector("body");
        body.appendChild(createNoteForm());
        isNotesFormDisplayed = true;
    }
}