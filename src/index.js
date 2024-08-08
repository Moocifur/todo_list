import { Task } from './modules/task';
import { Project } from './modules/project';

//sample tasks
const defaultProject = new Project('Default Project');
defaultProject.addTask(new Task('Buy groceries'));
defaultProject.addTask(new Task('Read a Book'));

//storing projects
const projects = [defaultProject];
let currentProjectIndex = 0;

//render project & tasks functions
function renderProjectList() {}
function renderTaskList() {}

//render when loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProjectList();
    renderTaskList();
    
    //click to add task to project
    document.getElementById('add-task').addEventListener('click', () => {
        const taskTitle = document.getElementById('new-task').value;
        if (taskTitle) {
            const newTask = new Task(taskTitle); //newTask = whatever inout was
            projects[currentProjectIndex].addTask(newTask);
            document.getElementById('new-task').value = '';
            renderTaskList();
        }
    });
});