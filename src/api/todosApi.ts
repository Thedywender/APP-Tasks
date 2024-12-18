const URL = 'http://localhost:3000';
import { Todo } from '../types/todoTypes';


export async function fetchTodos(): Promise<Todo[]> {
    try {
        const response = await fetch(`${URL}/todos`);
        return response.json() as Promise<Todo[]>;
    } catch (e: unknown) {
        if (e instanceof Error)
        {
            console.log(e.message);
        } else {
            console.log('An unknown error occurred');
        }
        alert('Failed to fetch todos');
        return [];
    }
}

export async function postTodo(todo: string) {
    try {
        const response = await fetch(`${URL}/todos`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                value: todo,
                checked: false,
            }),
        });
        return response.json();
    }
    catch (e: unknown) {
        if (e instanceof Error) {
            console.log(e.message);
        } else {
            console.log('An unknown error occurred');
        }
        alert('Failed to add todo');
}};

export async function putTodo(todo: Todo) {
    try {
        const response = await fetch(`${URL}/todos/${todo.id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        });
        return response.json();
    }
    catch (e: unknown) {
        if (e instanceof Error) {
            console.log(e.message);
        } else {
            console.log('An unknown error occurred');
        }
        alert('Failed to update todo');
}};

export async function deleteTodo(todo: Todo): Promise<void> {
    try {
        const response = await fetch(`${URL}/todos/${todo.id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Failed to delete todo');
        }
    }
    catch (e: unknown) {
        if (e instanceof Error) {
            console.log(e.message);
        } else {
            console.log('An unknown error occurred');
        }
        alert('Failed to delete todo');
        throw e;
}};