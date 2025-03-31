import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskslice'; // Ensure this matches the file name correctly

const store = configureStore({
    reducer: {
        tasks: taskReducer, // Attach the task reducer
    },
});

export default store;
