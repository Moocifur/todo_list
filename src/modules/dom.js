//dom.js
//This module handles rendering of project list and tasklist to the Dom.

import { projects, currentProjectIndex } from '../index.js';

//Function to render the list of projects in the sidebar
export function renderProjectList() {
    const projectListElement = document.getElementById('project-list');
    projectListElement.innerHTML = ''; //clear the current project list
    
    //Loop through each project and create a list item for it
    projects.forEach((project, index) => {
        const projectItem = document.createElement('li');
        projectItem.textContent = project.name; //Set project name as the list item text

        //Add click even listener to update thecurrent project andrender its tasks
        projectItem.addEventListener('click', () => {
            currentProjectIndex = index;
            renderTaskList(); //Render the tasks for the selected project
        });

        projectListElement.appendChild(projectItem); //Add the project item to the list
    });
}

//Function to render the list of tasks for the selected project
export function renderTaskList() {
    const project = projects[currentProjectIndex]; //Get the current project

    const taskListElement = document.getElementById('task-list');
    taskListElement.innerHTML = ''; //Clear the task list

    const projectTitleElement = document.getElementById('project-title');
    projectTitleElement.textContent = project.name; //Display project name in the title

    // Loop through each task in the project and create a task item element 
    project.tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.textContent = task.title; // Set the task title as item text

        // Toggle the 'complete' class based on the task's completion status
        taskItem.classList.toggle('complete', task.isComplete);

        //Add click event listener to toggle task completion
        taskItem.addEventListener('click', () => {
            task.toggleCompletion();
            taskItem.classList.toggle('completed', task.isComplete); // Update the UI to reflect the new status
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            
        })

        taskListElement.appendChild(taskItem);
    });
}
