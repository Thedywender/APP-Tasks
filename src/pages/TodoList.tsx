import { useContext, useEffect } from "react";
import Context from "../Context/Context";
import flowers from "../assets/flowers.jpeg";
import { Todo } from "../types/todoTypes";
import TodoItem from "../components/todoItem";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom"

function TodoList() {
    const { user, todos, loading, getTodos, editTodo } = useContext(Context);

    const navigate = useNavigate();

    useEffect(() => {
        if(!todos.length) {
            getTodos();
        }
    }, []);

    const handleChange = (task: Todo) => {
        editTodo({ ...task, checked: !task.checked});
    };


    return (
        <>
            <img width="100" src={flowers} alt="Flowers" />
            <h1>Welcome, { user }</h1>
            <button onClick={() => navigate("/todo/add")} >ADD NEW TASK</button>
            <p>Daily Tasks</p>
            <ul>
                {loading ? (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <TailSpin
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                     </div>                    
                )
                : (
                    todos.map(task => (
                        <TodoItem key={task.id} task={task} onChange={handleChange} />
                    ))

                )}
            </ul>
        </>
    );
}

export default TodoList;