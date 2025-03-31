# Task Manager App

A simple and interactive task management application built with React, Redux, Material UI, and @hello-pangea/dnd for drag-and-drop functionality. This app allows users to add, edit, delete, and reorder tasks, as well as filter and sort them based on their due date and priority. Tasks are persisted in the browser's localStorage, so they remain available even after a page refresh.

## Features

- **Add Tasks**: Users can input a task description, select priority, and set a due date.
- **Edit Tasks**: Users can edit existing tasks directly within the list.
- **Delete Tasks**: Users can remove tasks from the list.
- **Complete Tasks**: Users can mark tasks as completed.
- **Reorder Tasks**: Drag and drop tasks to change their order.
- **Filter Tasks**: Filter tasks to show only completed, active, or all tasks.
- **Sort Tasks**: Sort tasks by due date or priority.
- **Data Persistence**: Tasks are stored in localStorage to persist data across sessions.

## Technologies Used

- **Frontend**: React, Redux, Material UI
- **Drag and Drop**: @hello-pangea/dnd
- **State Management**: Redux Toolkit
- **Styling**: CSS (with Material UI components)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/levanter914/task-manager-app.git
   cd task-manager-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and go to `http://localhost:5173`.

## Usage

- **Adding a Task**: Enter a task description, select the priority, choose a due date, and click the "Add" button.
- **Editing a Task**: Click the edit icon next to a task to modify its description.
- **Deleting a Task**: Click the delete icon to remove a task.
- **Completing a Task**: Click the checkbox next to a task to mark it as completed.
- **Reordering Tasks**: Click and drag tasks to rearrange them in the list.
- **Filtering and Sorting**: Use the dropdowns to filter and sort tasks as needed.


