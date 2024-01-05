//TODO Logic
class Todo {
    constructor(proj, title, description, dueDate, priority){
        this.proj = proj;
        this.title = title;
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority
    }
}

function createTodo (proj, title, description, dueDate, priority){
    const todo = new Todo(proj, title, description, dueDate, priority);

    return {todo};
}

//Notes Logic
class Note {
    constructor(title, description){
        this.title = title;
        this.description = description;
    }
}

function createNote(title, description){
    const note = new Note(title, description);
    return { note };
}

const test = createTodo("home", "read", "read 100pgs", "01/05/24", "high");
// new Todo ("home", "read", "read 100pgs", "01/05/24", "high");

const note1 = createNote("wake up", "run at 6am");

console.log(test);
console.log(note1);