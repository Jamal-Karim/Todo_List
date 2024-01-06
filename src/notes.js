//Notes Logic
export class Note {
    constructor(title, description){
        this.title = title;
        this.description = description;
    }
}

export function createNote(title, description){
    const note = new Note(title, description);
    return { note };
}