import { useState,useReducer} from "react";
import { initialState,counterReducer } from "./counterReducer";

function Counter(){
    const [state,dispatch] = useReducer(counterReducer,initialState);
    const [inputValue,setInputValue] = useState(0);

    const IncrementByAmount = () => {
        dispatch({type:"incrementByAmount",payload:Number(inputValue)});
        setInputValue(0);
    }
    const DecrementByAmount = () => {
        dispatch({type:"decrementByAmount",paylod:Number(inputValue)});
        setInputValue(0);
    }

    return(
        <>
        <h1>Counter: {state.count}</h1>
        <button onClick={() => {dispatch({type:"increment"})}}>+</button>
        <button onClick={() => dispatch({type:"decrement"})}> - </button>
        <button onClick={() => dispatch({type:"reset"})}>Reset</button>
        <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={IncrementByAmount}>Add</button>
        <button onClick={DecrementByAmount}>Subtract</button>
        </>
    )

}


export default Counter;