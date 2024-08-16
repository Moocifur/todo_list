//project.js
//This module defines the Project class, representing a collection of tasks under a common project name.

export class Project {
    //Constructor initilizes a new project with a name and an empty array of tasks
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    //Method to add a new task to the project
    addTask(task) {
        this.tasks.push(task);
    }

    //Method to remove a task from the project by its index
    removeTask(taskIndex) {
        this.tasks.splice(taskIndex, 1);
    }
}