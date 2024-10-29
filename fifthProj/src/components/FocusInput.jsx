import React from "react";
import { useState, useRef } from "react";

function FocusInput(){
    const valueRef = useRef(null);
    const clickHandler = () => {
        valueRef.current.focus();
        valueRef.current.value = "Akshat";
    }
    return(
        <>
        <input type="text" ref={valueRef}/>
        <button onClick={clickHandler}> Focus Bhai</button>
        </>
    )
}

export default FocusInput;