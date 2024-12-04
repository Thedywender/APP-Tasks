import { Todo } from '../types/todoTypes';

export const validateUsername = (username: string) => {
    return username.length >= 8;
};

export const validatePassword = (password: string) => {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
    return password.length >= 8 && regex.test(password);
};

export const isTaskEmpty = (task: string): boolean => {
    return task.trim() === '';
};

export const doesTaskExist = (task: string, todos: Todo[]): boolean => {
    const normalizedTask = task.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    return todos.some(todo => 
        todo.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase() === normalizedTask
    );
};

export const startsWithNumber = (task: string): boolean => {
    return /^\d/.test(task);
};

export const isOnlyNumbers = (task: string): boolean => {
    return /^\d+$/.test(task);
};