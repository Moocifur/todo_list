index.js:
Purpose: Entry point of the application. Handles initial rendering of projects and tasks, sets up event listeners for adding tasks and projects.
Key Interactions: Imports Task, Project, and rendering functions from dom.js. Manages the projects array and currentProjectIndex.

dom.js:
Purpose: Handles all DOM manipulations. Responsible for rendering the project list and task list, and adding event listeners for task completion and deletion.
Key Interactions: Imports projects and currentProjectIndex from index.js and uses them to render the UI.

task.js:
Purpose: Defines the Task class, representing a single task with a title and completion status.
Key Interactions: Used in index.js when adding tasks to a project.

project.js:
Purpose: Defines the Project class, representing a project with a name and a list of tasks.
Key Interactions: Used in index.js when creating new projects and managing tasks within a project.