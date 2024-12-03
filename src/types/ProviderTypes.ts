import { Todo } from '../types/todoTypes';

export type ProviderProps = {
    children: React.ReactNode;
}

export type ProviderValues = {
    user: string;
    onLogin: (username: string) => void;
    loading: boolean;
    todos: Todo[];
    getTodos: () => Promise<void>;
    editTodo: (taskData: Todo) => Promise<void>;
}