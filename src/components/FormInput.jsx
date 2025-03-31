import * as React from 'react'; 
import { Button, TextField, FormHelperText, FormControl, Stack, Select, MenuItem } from '@mui/material';

const FormInput = ({ todo, setTodo, clearInput, inputRef, isInputEmpty, addTodo }) => {
    const [priority, setPriority] = React.useState('normal'); 
    const [dueDate, setDueDate] = React.useState(''); 

    return (
        <FormControl fullWidth>

            <Stack direction="row" spacing={2} alignItems="center">
                <TextField
                    label="What's need to be done?"
                    value={todo}
                    variant="outlined"
                    onChange={(e) => setTodo(e.target.value)}
                    onFocus={clearInput}
                    inputRef={inputRef}
                    onKeyDown={(e) => e.key === 'Enter' && addTodo({ text: todo, priority, dueDate })}
                    sx={{ flexGrow: 1, fontFamily: "'Comic Neue', cursive" }}
                />
            </Stack>


            <Stack direction="row" spacing={2} alignItems="center" mt={2}>
                <Select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    displayEmpty
                    sx={{ minWidth: 120 }}
                >
                    <MenuItem value="normal">Normal</MenuItem>
                    <MenuItem value="high">High</MenuItem>
                    <MenuItem value="low">Low</MenuItem>
                </Select>
                <TextField
                    label="Due Date"
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    sx={{ minWidth: 120 }}
                    InputLabelProps={{ shrink: true }}
                />
                <Button 
                    variant="outlined" className='add-btn'
                    color="black" 
                    sx={{ fontFamily: "'Comic Neue', cursive" }} 
                    onClick={() => addTodo({ text: todo, priority, dueDate })}>
                    Add
                </Button>
            </Stack>

            {isInputEmpty && <FormHelperText>Task can't be empty</FormHelperText>}
        </FormControl>
    );
};

export default FormInput;
