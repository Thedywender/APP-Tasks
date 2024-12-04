import { useContext, useState } from "react";
import Context from "../Context/Context";
import flowers from "../assets/flowers.jpeg";
import { useNavigate } from "react-router-dom";
import { isTaskEmpty, doesTaskExist, 
    startsWithNumber, isOnlyNumbers } from "../utils/validation";

function AddTodo() {

    const { user, todos, addTodos } = useContext(Context);
    const [task, setTask] = useState('');
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (isTaskEmpty(task) || startsWithNumber(task) || isOnlyNumbers(task)) {
            alert('Task cannot be empty, or start with a number or be only numbers');
            return;
        }

        if (doesTaskExist(task, todos)) {
            alert('Task already exists');
            return;
        }

        addTodos(task);
        navigate('/todo');
    }



    return (
        <>
        <h1>Welcome { user }</h1>
        <img src={flowers} alt="Flores imagem" />
        <p>Add your new task</p>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" placeholder="Task name" id='task' value={task} />
            <button>Add Task to List</button>
        </form>
        </>
    );
}

export default AddTodo;