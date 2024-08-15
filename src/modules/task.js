export class Task {
    constructor(title, isComplete = false) {
        this.title = title;
        this.isComplete = isComplete;
    }

    toggleCompletion() {
        this.isComplete = !this.isComplete;
    }
}