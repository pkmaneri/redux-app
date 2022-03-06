import { useState } from "react";

const Create=(props)=>{
     const [item,setItem]=useState("");
     const add=()=>{
        props.callback(item)
     }
    return(
        <div>
            <input onChange={(e)=>setItem(e.target.value)}></input>
            <button onClick={add}>Add</button>
        </div>
    )
}
export default Create