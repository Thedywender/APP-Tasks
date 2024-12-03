import { useState } from "react";
import { Todo } from "../types/todoTypes"
import { fetchTodos, putTodo } from "../api/todosApi"
import Context from "./Context";
import { ProviderProps, ProviderValues } from "../types/ProviderTypes";

function Provider({ children}: ProviderProps) {
    const [user, setUser] = useState('');
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(false);

    const onLogin = (username: string) => {
        setUser(username);
    }

    const getTodos = async () => {
        try {
            setLoading(true);
            const response = await fetchTodos();
            setTodos(response);
        } catch {
            console.error('Failed to fetch todos');
        } finally {
            setLoading(false);
        }
    }

    const editTodo = async (taskData: Todo) => {
        try {
            const updatedtodos = todos.map((task) => {
                if (task.id === taskData.id) {
                    task.checked = taskData.checked;
                }
                return task;
            })
            setLoading(true);
            setTodos(updatedtodos);
            setLoading(false);

            await putTodo(taskData);
        } catch {
            console.error('Failed to edit todo');
        } finally {
            setLoading(false);
        }
    }
    

    const values: ProviderValues = {
        user,
        onLogin,
        todos,
        loading,
        getTodos,
        editTodo,
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}
    
    
    
    
    
export default Provider;