import React from 'react';
import TodoItemProps from '../interfaces/todoItem';

const TodoItem: React.FC<TodoItemProps> = ({ task, onChange }) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={task.checked}
                onChange={() => onChange(task)}
            />
            {task.value}
        </li>
    );
};

export default TodoItem;