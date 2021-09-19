import React from 'react';
import {saveitem} from './action/myaction';

import { useSelector, useDispatch } from 'react-redux';
const ReduxThree = () =>{
    const productList = useSelector(state =>state.productList); // to fetch data from store
    const dispatch = useDispatch();
    const removeitem =(index)=>{
        dispatch({
            type:'remove',
            index:index
        });
        
    }
    return(
        <div align="center">
            <h1> Redux Example Three For Multi Dimensional Array </h1>
            <p>Enter Item Name : <input type="text" id="pname"/></p>
            <p>Enter Item Price : <input type="text" id="price"/></p>
            <p>Enter Item Qty : <input type="text" id="qty"/></p>

            <button onClick={()=> dispatch(saveitem()) }> Save Item </button>
            <h2> Available Items : {productList.length} </h2>
           <table align="center" cellPadding="15">
                <thead>
                    <tr>
                        <th>Item Index</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Item Quantity</th>
                        <th>Total</th>
                        <th>Action</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map((pinfo ,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{pinfo.name}</td>
                                    <td>{pinfo.price}</td>
                                    <td>{pinfo.qty}</td>
                                    <td>{pinfo.price*pinfo.qty}</td>
                                    <td> <button onClick={()=>dispatch(removeitem(index))}>X</button>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
           </table>
        </div>
    )
}
export default ReduxThree;