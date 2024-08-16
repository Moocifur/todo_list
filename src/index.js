// index.js
// This file serves as the main entry point for the application, coordinating the initialization and rendering of projects and tasks.

import { Task } from './modules/task.js';
import { Project } from './modules/project.js';
import { renderProjectList, renderTaskList } from './modules/dom.js';

// Step 1: Initialize a default project with sample tasks
const defaultProject = new Project('Default Project');
defaultProject.addTask(new Task('Buy groceries'));
defaultProject.addTask(new Task('Read a Book'));

// Step 2: Initialize the projects array and set the current project index
const projects = [defaultProject];
let currentProjectIndex = 0;

export { projects, currentProjectIndex };

// Step 3: Render project and tasklists upon page load
document.addEventListener('DOMContentLoaded', () => {
    renderProjectList();
    renderTaskList();
    
    //Step 4: Add a new task to the current project when the user submits a task
    document.getElementById('add-task').addEventListener('click', () => {
        const taskTitle = document.getElementById('new-task').value;
        if (taskTitle) {
            const newTask = new Task(taskTitle); // Create a new Task
            projects[currentProjectIndex].addTask(newTask); // Add the task to the current project
            document.getElementById('new-task').value = ''; // Clear the input field
            renderTaskList(); //Update the task list display
        }
    });
    
    // Step 5: Add a new project and update the project list display
    document.getElementById('add-project').addEventListener('click', () => {
        const projectName = document.getElementById('new-project-name').value;
        if (projectName) {
            const newProject = new Project(projectName); //Create a new P
            projects.push(newProject); // Add the project to the projects array
            document.getElementById('new-project-name').value = ''; // Clear the input field
            renderProjectList(); // Update the project list display
        }
    });
});
