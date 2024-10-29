import {useRef, useEffect,useState} from 'react' 

function Timer(){
    const timeRef = useRef(null);
    const [count,setCount] = useState(0);
    useEffect(() => {
        timeRef.current = setInterval(()=>{
            setCount(count => count+1);
        },1000)

        return () => {
            clearInterval(timeRef.current);
        }
        
    },[])

    const stopTimer = () => {
        clearInterval(timeRef.current);
    }


    return(
        <>
        <h1>Timer : {count} seconds</h1>
        <button onClick={stopTimer}>Stop Timer</button>
        </>
    )
}

export default Timer;