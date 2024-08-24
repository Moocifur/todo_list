// index.js
// This file serves as the main entry point for the application, coordinating the initialization and rendering of projects and tasks.

import { Task } from './modules/task.js';
import { Project } from './modules/project.js';
import { renderProjectList, renderTaskList } from './modules/dom.js';

//Save the current state of projects to localStorage
export function saveToLocalStorage() {
    //converts the data to a JSON string to be stored in localStorage
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('currentProjectIndex', currentProjectIndex);
}

//load projects and currentProjectIndex from localStorage
function loadFromLocalStorage() {
    const storedProjects = localStorage.getItem('projects');
    const storedProjectIndex = localStorage.getItem('currentProjectIndex');

    //parse stored JSON string to retrieve the projects array
    if (storedProjects) {
        const parsedProjects = JSON.parse(storedProjects);
        projects = parsedProjects.map(projectData => {
            const project = new Project(projectData.name);
            projectData.tasks.forEach(taskData => {
                const task = new Task(taskData.title, taskData.isComplete);
                project.addTask(task);
            });
            return project;
        })
    }
    if (storedProjectIndex !== null) {
        currentProjectIndex = parseInt(storedProjectIndex, 10);
    }
}

// Step 1: Initialize a default project with sample tasks
const defaultProject = new Project('Default Project');
defaultProject.addTask(new Task('Buy groceries'));
defaultProject.addTask(new Task('Read a Book'));

// Step 2: Initialize the projects array and set the current project index
let projects = [defaultProject];
let currentProjectIndex = 0;

export { projects, currentProjectIndex };

// Step 3: Render project and tasklists upon page load
document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage(); //load data from localStorage
    renderProjectList(); //Render the list of projects
    renderTaskList(); //Render the tasks for the current project
    
    //Step 4: Add a new task to the current project when the user submits a task
    document.getElementById('add-task').addEventListener('click', () => {
        const taskTitle = document.getElementById('new-task').value;
        if (taskTitle) {
            const newTask = new Task(taskTitle); // Create a new Task
            projects[currentProjectIndex].addTask(newTask); // Add the task to the current project
            document.getElementById('new-task').value = ''; // Clear the input field
            renderTaskList(); //Update the task list display
            saveToLocalStorage(); //Save the updated projects to localStorage
        }
    });
    
    // Step 5: Add a new project and update the project list display
    document.getElementById('add-project').addEventListener('click', () => {
        const projectName = document.getElementById('new-project-name').value;
        if (projectName) {
            const newProject = new Project(projectName); //Create a new Project
            projects.push(newProject); // Add the project to the projects array
            document.getElementById('new-project-name').value = ''; // Clear the input field
            renderProjectList(); // Update the project list display
            saveToLocalStorage(); //Save the updated projects to localStorage
        }
    });
});
