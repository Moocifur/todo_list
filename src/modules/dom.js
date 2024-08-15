import { projects, currentProjectIndex } from '../index.js';

export function renderProjectList() {
    const projectListElement = document.getElementById('project-list');
    projectListElement.innerHTML = ''; //clear existing content
    
    //for each project in projects...
    projects.forEach((project, index) => {
        const projectItem = document.createElement('li');
        projectItem.textContent = project.name; //Set project name as the text content

        projectItem.addEventListener('click', () => {
            currentProjectIndex = index; //update the current project index
            renderTaskList(); //Render the tastks for the selected project
        });

        projectListElement.appendChild(projectItem); //Append the list item to the project list element
    });
}

export function renderTaskList() {
    const project = projects[currentProjectIndex];

    const taskListElement = document.getElementById('task-list');
    taskListElement.innerHTML = '';

    const projectTitleElement = document.getElementById('project-title');
    projectTitleElement.textContent = project.name;

    project.tasks.forEach((task, index) => { //contains  like "buy groceries" and a boolean for complete or not
        //create title for dom
        const taskItem = document.createElement('div');
        taskItem.textContent = task.title;

        //???
        taskItem.classList.toggle('complete', task.isComplete);

        taskItem.addEventListener('click', () => {
            task.toggleCompletion();
            taskItem.classList.toggle('completed', task.isComplete);
        });

        taskListElement.appendChild(taskItem);
    });

    //in here??
}
//we are working on rendering TASKS now! chat gpt knows as him to hold the spot
