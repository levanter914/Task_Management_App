import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskslice'; 

// Load from localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('tasks');
        if (serializedState === null) {
            return undefined; 
        }
        return JSON.parse(serializedState); 
    } catch (err) {
        return undefined;
    }
};

// Save to localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('tasks', serializedState); 
    } catch (err) {
    }
};

// Create
const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
    preloadedState: { tasks: loadState() },
});

store.subscribe(() => {
    saveState(store.getState().tasks);
});

export default store;
