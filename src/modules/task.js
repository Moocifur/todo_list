//task.js
//This module defines the Task class, representing an individual task in a project

export class Task {
    //Constructor initilizes a new task with a title and a optional completion status (default is incomplete)
    constructor(title, isComplete = false) {
        this.title = title;
        this.isComplete = isComplete;
    }

    //Method to toggle the task's completion status
    toggleCompletion() {
        this.isComplete = !this.isComplete;
    }
}