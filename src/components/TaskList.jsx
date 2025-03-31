import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Checkbox, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { styled } from '@mui/material/styles';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const StyledList = styled(List)({
    width: '100%',
    backgroundColor: '#f5f5f5',
    padding: 0,
    marginTop: '20px',
});

const StyledListItem = styled(ListItem)({
    borderBottom: '2px dashed black',
    padding: '12px 16px',
    fontSize: '1.2rem',
});

const TaskList = ({ todos, completeTodo, editTodo, deleteTodo, saveTodo, noteRef, preventSubmit, reorderTasks }) => {
    return (
        <DragDropContext onDragEnd={reorderTasks}>
            <Droppable droppableId="task-list">
                {(provided) => (
                    <StyledList {...provided.droppableProps} ref={provided.innerRef}>
                        {todos.map((todo, index) => (
                            <Draggable key={index} draggableId={String(index)} index={index}>
                                {(provided) => (
                                    <StyledListItem
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <ListItemIcon>
                                            <Checkbox
                                                color="primary"
                                                edge="start"
                                                checked={todo.isCompleted}
                                                inputProps={{ 'aria-labelledby': `todo-${index}` }}
                                                onChange={() => completeTodo(index)}
                                                onKeyUp={preventSubmit}
                                            />
                                        </ListItemIcon>
                                        {!todo.isEditing ? (
                                            <>
                                                <ListItemText
                                                    id={`todo-${index}`}
                                                    primary={todo.text}
                                                    sx={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}
                                                />
                                                <IconButton edge="end" onClick={() => editTodo(index)}>
                                                    <EditIcon />
                                                </IconButton>
                                            </>
                                        ) : (
                                            <>
                                                <input
                                                    className="form__edit-input"
                                                    defaultValue={todo.text}
                                                    ref={(el) => (noteRef.current[index] = el)}
                                                    onKeyUp={preventSubmit}
                                                    aria-label="edit task"
                                                />
                                                <IconButton onClick={() => saveTodo(index, noteRef.current[index].value)} edge="end">
                                                    <BookmarkIcon />
                                                </IconButton>
                                            </>
                                        )}
                                        <IconButton onClick={() => deleteTodo(index)} edge="end" sx={{ marginLeft: 'auto' }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </StyledListItem>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </StyledList>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default TaskList;
