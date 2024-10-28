import React from "react";
import { useState } from "react";

function Todo(){
    const [todos,setTodos] = useState([]);
    const [todo,setTodo] = useState("");
    const onChangeHandler = (e) => {
        setTodo(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo('');
    }
    return(
        <div>
            <h1>Todo List</h1>
            <form onSubmit={submitHandler}>
                <input type="text" value={todo} onChange={onChangeHandler} />
                <button type="submit">Submit</button>
            </form>
            <ul>
            {
                todos.map((todo) => {
                    return <li key={Math.random()}>{todo}</li>
                })
            }
            </ul>

        </div>
    )
}


export default Todo;