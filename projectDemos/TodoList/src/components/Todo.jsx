import React from "react";
import {useState} from "react";
import "./Todo.css";

function Todo(){
    const[todos, setTodos] = useState([]);
    const [inputValue,setInputValue] = useState("");
    const handleSubmit = () => {
        // e.preventDefaultBehaviour();
        setTodos((todos) => {
            return todos.concat({
                text:inputValue,
                id: Math.floor(Math.random() * 100)
            });
        })
        setInputValue("");
    }
    const removeTodo = (id) => {
        setTodos((todos) => {
            return todos.filter((todo) => todo.id !== id);
        })
    }
    return(
       <div className="container">
        <input type="text" value={inputValue} placeholder="New Todo" onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>

        <ul>
            {
                todos.map(({text,id})=>[
                    <li className="todo" key = {id}>
                        <span>{text}</span>
                        <button className="close" onClick={() => removeTodo(id)}></button>
                    </li>
                ])
            }
        </ul>
       </div>
    )
}

export default Todo;