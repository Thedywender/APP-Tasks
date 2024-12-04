import { Todo } from "../types/todoTypes";

export default interface TodoItemProps {
    task: Todo;
    onChange: (task: Todo) => void;
    deleteTodo: (task: Todo) => void;
}