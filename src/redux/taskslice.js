import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push({ ...action.payload, isCompleted: false, isEditing: false });
        },
        toggleComplete: (state, action) => {
            const task = state[action.payload];
            if (task) {
                task.isCompleted = !task.isCompleted;
            }
        },
        editTask: (state, action) => {
            const task = state[action.payload];
            if (task) {
                task.isEditing = true;
            }
        },
        saveTask: (state, action) => {
            const { index, newText } = action.payload;
            if (state[index]) {
                state[index].text = newText;
                state[index].isEditing = false;
            }
        },
        deleteTask: (state, action) => {
            state.splice(action.payload, 1);
        },
        reorderTask: (state, action) => {
            const { sourceIndex, destIndex } = action.payload;
            const [movedTask] = state.splice(sourceIndex, 1);
            state.splice(destIndex, 0, movedTask);
        },
    },
});

export const { addTask, toggleComplete, editTask, saveTask, deleteTask, reorderTask } = tasksSlice.actions;
export default tasksSlice.reducer;
