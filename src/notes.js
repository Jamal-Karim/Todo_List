//Notes Logic
export class Note {
    constructor(description){
        this.description = description;
    }
}

export function createNote(description){
    return new Note(description);
}

let isNotesFormDisplayed = false;

export function createNoteForm(){
    
    const noteDiv = document.createElement("div");
    noteDiv.classList.add('notesForm');

    const form = document.createElement("form");

    const label = document.createElement("label");
    label.textContent = "Enter Note : ";
    form.appendChild(label);

    const input = document.createElement("input");
    input.type = 'text';
    form.appendChild(input);

    noteDiv.appendChild(form);

    return noteDiv;

}