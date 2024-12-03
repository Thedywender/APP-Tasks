import { useContext, useState } from "react";
import Context from "../Context/Context";
import flowers from "../assets/flowers.jpeg";

function AddTodo() {

    const { user } = useContext(Context);
    const [task, setTask] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTask('');
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