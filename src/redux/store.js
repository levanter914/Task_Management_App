// store.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskslice'; // Ensure this matches the file name correctly

// Load initial state from localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('tasks');
        if (serializedState === null) {
            return undefined; // No saved tasks
        }
        return JSON.parse(serializedState); // Parse and return tasks
    } catch (err) {
        return undefined; // Error loading state
    }
};

// Save state to localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('tasks', serializedState); // Save tasks
    } catch (err) {
        // Ignore write errors
    }
};

// Create store with persisted state
const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
    preloadedState: { tasks: loadState() }, // Load tasks into the state
});

// Subscribe to store updates and save tasks to localStorage
store.subscribe(() => {
    saveState(store.getState().tasks); // Save tasks on every change
});

export default store;
