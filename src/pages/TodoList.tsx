import { useContext } from "react";
import Context from "../Context/Context";
import flowers from "../assets/flowers.jpeg";

function TodoList() {

    const { user } = useContext(Context);
    return (
        <>
            <img width="100" src={flowers} alt="Flowers" />
            <h1>Welcome, { user }</h1>
            <button>ADD NEW TASK</button>
            <p>Dayly Tasks</p>
            <ul>...</ul>
        </>
    );
}

export default TodoList;