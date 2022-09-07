import { useState } from "react";
export default function UseStateDemo(){
    const [number,setNumber] = useState(0);
    const update = ()=>{
        setNumber(number+1);
    }

    return(
        <>
            <button onClick={update} >Number</button>
            <h1>{number}</h1>

        </>
    );
}