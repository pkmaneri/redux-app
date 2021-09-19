import React from "react";

import {additem} from "./action/myaction"

import { useSelector,useDispatch } from "react-redux";

const ReduxTwo=()=>{
    const itemList=useSelector(state=>state.itemList) // to fetch data from store
    const dispatch= useDispatch()
    return(
        <div align="center">
            <h1>Redux Example Two For 1 Dimensional Array</h1>
            <p>
                Enter Item Name: <input type="text" id="itemname"></input>
                <button onClick={()=>dispatch(additem())}>Save Item</button>
            </p>
            <h2>Available Item: {itemList.length}</h2>
            {
                itemList.map((name,index)=>{
                    return(
                        <p key={index}>{index}.{name}</p>
                    )
                })
            }
        </div>
    )
}
export default ReduxTwo;


