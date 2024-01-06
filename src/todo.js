//TODO Logic
export class Todo {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export function createTodo (title, description, dueDate, priority){
    const todo = new Todo(title, description, dueDate, priority);
    return {todo};
}
