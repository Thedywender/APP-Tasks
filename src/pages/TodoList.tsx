import { useContext } from "react";
import Context from "../Context/Context";

function TodoList() {

    const { user } = useContext(Context);
    return (
        <div>
        <h1>Welcome, { user }</h1>
        </div>
    );
}

export default TodoList;