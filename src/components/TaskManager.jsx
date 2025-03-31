import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleComplete, editTask, saveTask, deleteTask, reorderTask } from '../redux/taskslice';
import FormInput from './FormInput';
import TaskList from './TaskList';
import { Stack, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

const ResponsiveFormControl = styled(FormControl)({
    width: '100%', // Full width
    maxWidth: '400px', // Limit max width
    margin: '0 auto', // Center form control
});

const TaskManager = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState('');
    const inputRef = useRef();
    const noteRef = useRef({});
    const [isInputEmpty, setInputEmpty] = useState(false);
    const [filter, setFilter] = useState('all'); 
    const [sortOrder, setSortOrder] = useState('date'); 

    const addTodo = (text) => {
        if (text.text.trim() !== '') {
            dispatch(addTask(text)); 
            setNewTodo('');
            setInputEmpty(false);
        } else {
            setInputEmpty(true);
        }
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') return task.isCompleted;
        if (filter === 'active') return !task.isCompleted;
        return true;
    });

    const sortedTasks = filteredTasks.sort((a, b) => {
        if (sortOrder === 'date') {
            return new Date(a.dueDate) - new Date(b.dueDate); 
        } else if (sortOrder === 'priority') {
            const priorities = { high: 0, normal: 1, low: 2 }; 
            return priorities[a.priority] - priorities[b.priority]; 
        }
        return 0; 
    });

    const reorderTasks = (result) => {
        if (!result.destination) return;
        dispatch(reorderTask({ sourceIndex: result.source.index, destIndex: result.destination.index }));
    };

    return (
        <form onSubmit={(e) => e.preventDefault()} className='form'>
            <FormInput
                todo={newTodo}
                setTodo={setNewTodo}
                clearInput={() => setNewTodo('')}
                inputRef={inputRef}
                isInputEmpty={isInputEmpty}
                preventSubmit={(e) => e.key === 'Enter' && e.preventDefault()}
                addTodo={addTodo}
            />
            <Stack direction="row" spacing={2} sx={{ marginTop: '10px', flexWrap: 'wrap' }}>
                <ResponsiveFormControl size="small">
                    <Select
                        labelId="sort-select-label"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        displayEmpty
                    >
                        <MenuItem value="date">Sort by Due Date</MenuItem>
                        <MenuItem value="priority">Sort by Priority</MenuItem>
                    </Select>
                </ResponsiveFormControl>
            </Stack>
            <TaskList
                todos={sortedTasks}
                completeTodo={(inx) => dispatch(toggleComplete(inx))}
                editTodo={(inx) => dispatch(editTask(inx))}
                deleteTodo={(inx) => dispatch(deleteTask(inx))}
                saveTodo={(inx, newText) => dispatch(saveTask({ index: inx, newText }))}
                noteRef={noteRef}
                preventSubmit={(e) => e.key === 'Enter' && e.preventDefault()}
                reorderTasks={reorderTasks} 
            />
        </form>
    );
};

export default TaskManager;
