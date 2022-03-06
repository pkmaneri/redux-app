import React, { useEffect, useState } from 'react'

const Update = (props) => {
    const [item,setItem]=useState("");
    const updateitem=()=>{
        props.newupdateCallback(item)
        
    }
    useEffect(() => {
        setItem(props.newupdatevalue.item);
      }, [props]);
  return (
    <div>
            <input onChange={(e)=>setItem(e.target.value)}></input>
            <button onClick={updateitem}>update</button>
        </div>
  )
}

export default Update