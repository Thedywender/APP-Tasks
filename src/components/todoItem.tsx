import React from 'react';
import TodoItemProps from '../interfaces/todoItem';

const TodoItem: React.FC<TodoItemProps> = ({ task, onChange, deleteTodo }) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={task.checked}
                onChange={() => onChange(task)}
            />
            {task.value}
            <button onClick={() => deleteTodo(task)}>X</button>
        </li>
    );
};

export default TodoItem;