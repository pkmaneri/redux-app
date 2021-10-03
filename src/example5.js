import React, { useEffect, useState } from "react"
import {profileData,profileget, Profileremove } from './action/myaction';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import axios from "axios";

const ReduxFive = () => {
    const [bookName,setBookName]=useState("");
    const [price,setPrice]=useState("")
    const [qty,setQuantity]=useState("")
    const [bookphoto,setPhoto]=useState("")
    const [country,setCountry]=useState("")
   

    const {users} = useSelector(state => state.data)
    // to fetch data from store
    const dispatch = useDispatch();
   
    const addProfile=()=>{
        var data = { bookName: bookName, price: price, qty: qty,country:country ,bookphoto:bookphoto};
        var url = "http://localhost:3001/user/";
        axios.post(url,data).then(response=>{
            console.log(response)
            dispatch(profileData(response.data));
            setBookName("");
            setCountry("");
            setPhoto("");
            setPrice("");
            setQuantity("");
            getProfile();
            
        })
    }


       

 const handleDelete=(id)=>{
     console.log(id)
     axios.delete("http://localhost:3001/user/" + id)
    .then(response=>{
        dispatch(Profileremove());
        getProfile();
    })
};
 
  const getProfile=()=>{
        var url = "http://localhost:3001/user";
        axios.get(url).then(response=>{
            console.log(response)
            dispatch(profileget(response.data))
        })
        .catch((error)=>console.log(error))
    }

    useEffect(()=>{
        getProfile();
    },[true])


   
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4" >
                        <div className="mb-3" >
                            <label>BookName</label>
                            <input type="text" placeholder="bookName"className="form-control" value={bookName} onChange={(e)=>setBookName(e.target.value)} />
                        </div>
                        <div className="mb-3" >
                            <label>Price</label>
                            <input type="number" placeholder="price"  className="form-control" value={price} onChange={(e)=>setPrice(e.target.value)} />
                        </div>
                        <div className="mb-3">
                        <label>Book Photo</label>
                        <input type="text" className="form-control" value={bookphoto}
                        onChange={e=>setPhoto(e.target.value)}/>
                    </div>
                        <div className="mb-3" >
                            <label>Quantity</label>
                            <input type="number" placeholder="qty"  className="form-control" value={qty} onChange={(e)=>setQuantity(e.target.value)} />
                        </div>
                      
                        <div className="mb-3">
                            <lable>Country</lable>
                            <select class="form-control" value={country} onChange={(e)=>setCountry(e.target.value)} >
                                <option value="patna">Patna</option>
                                <option value="delhi">Delhi</option>
                                <option value="bangalore">Bangalore</option>
                                <option value="mumbai">Mumbai</option>
                            </select>
                        </div>
                        
                        <button type="submit" className="btn btn-primary" onClick={addProfile.bind(this)}  >Submit</button>
                    </div>
                    <div className="col-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>BookName</th>
                                    <th>Price</th>
                                    <th>Photo</th>
                                    <th>Qty</th>
                                    <th>Country</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                               {users && users.map((bookinfo,index)=>{
                                   return(
                                       <tr  key={index}>
                                           <td>{index}</td>
                                           <td>{bookinfo.bookName}</td>
                                           <td>{bookinfo.price}</td> 
                                           <td><img src={bookinfo.bookphoto} height="50" width="50" alt=""/></td> 
                                           <td>{bookinfo.qty}</td>
                                           <td>{bookinfo.country}</td>
                                           <td><button className="btn btn-danger" onClick={handleDelete.bind(this,index)}>Delete</button>
                                           <Link className="btn btn-warning m-2" to={`/${bookinfo.id}/editexample`}>Edit</Link>
                                           </td>

                                        </tr>
                                   )
                               })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ReduxFive;

