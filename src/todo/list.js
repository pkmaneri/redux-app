import React from 'react'

const List = (props) => {
  return (
    <ul>
        {props.itemlist.map((ele,id)=>{
            return(
                <li key={id}>{ele.item}<button onClick={()=>{props.callback(id)}}>D</button>
                  <button onClick={()=>{props.callbackupdate(ele,id)}}>Edit</button>
                </li>
            )
        })}
       
    </ul>
  )
}

export default List