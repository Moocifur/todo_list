//index.js
//This file serves as the main entry point for the application.
//It initializes the project and task data, sets up event listeners for user interactions,
//and coordinates the rendering of the project and task lists.

import { Task } from './modules/task.js';
import { Project } from './modules/project.js';
import { renderProjectList, renderTaskList } from './modules/dom.js';

//sample tasks
const defaultProject = new Project('Default Project');

defaultProject.addTask(new Task('Buy groceries'));
defaultProject.addTask(new Task('Read a Book'));

//storing projects/initilizers
const projects = [defaultProject]; //its up here bro
let currentProjectIndex = 0;

export { projects, currentProjectIndex };

//render when loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProjectList();
    renderTaskList();
    
    //click to add task to project
    document.getElementById('add-task').addEventListener('click', () => {
        const taskTitle = document.getElementById('new-task').value;
        if (taskTitle) {
            const newTask = new Task(taskTitle); //newTask = whatever iput was
            projects[currentProjectIndex].addTask(newTask);
            document.getElementById('new-task').value = '';
            renderTaskList();
        }
    });
    
    document.getElementById('add-project').addEventListener('click', () => {
        const projectName = document.getElementById('new-project-name').value;
        if (projectName) {
            const newProject = new Project(projectName);
            projects.push(newProject);
            document.getElementById('new-project-name').value = '';
            renderProjectList();
        }
    });
});
