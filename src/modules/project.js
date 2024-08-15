export class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    //comes with add
    addTask(task) {
        this.tasks.push(task);
    }

    //comes with remove
    removeTask(taskIndex) {
        this.tasks.splice(taskIndex, 1);
    }
}