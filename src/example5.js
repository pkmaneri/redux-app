import React, { useState } from "react"
import { profileData, removeData } from './action/myaction';

import { useSelector, useDispatch } from 'react-redux';

const ReduxFive = () => {
    const [bookName,setBookName]=useState("");
    const [price,setPrice]=useState("")
    const [qty,setQuantity]=useState("")
    const [bookphoto,setPhoto]=useState("")
    const [country,setCountry]=useState("")


    const profileList = useSelector(state => state.profileList)
    // to fetch data from store
    const dispatch = useDispatch();
   
    const addProfile=()=>{
        var temp = { bookName: bookName, price: price, qty: qty,country:country ,bookphoto:bookphoto};
        dispatch(profileData(temp));
        setBookName("");
        setPrice("");
        setQuantity("");
        setCountry("")
        setPhoto("")

                    
    }
    
   
   
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4" >
                        <div className="mb-3" >
                            <label>BookName</label>
                            <input type="text" placeholder="bookName"class="form-control" value={bookName} onChange={(e)=>setBookName(e.target.value)} />
                        </div>
                        <div className="mb-3" >
                            <label>Price</label>
                            <input type="number" placeholder="price"  class="form-control" value={price} onChange={(e)=>setPrice(e.target.value)} />
                        </div>
                        <div className="mb-3">
                        <label>Book Photo</label>
                        <input type="text" className="form-control" value={bookphoto}
                        onChange={e=>setPhoto(e.target.value)}/>
                    </div>
                        <div className="mb-3" >
                            <label>Quantity</label>
                            <input type="number" placeholder="qty"  class="form-control" value={qty} onChange={(e)=>setQuantity(e.target.value)} />
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
                        
        
                        <button type="submit" class="btn btn-primary"onClick={addProfile.bind(this)}  >Submit</button>

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
                               {profileList.map((bookinfo,index)=>{
                                   return(
                                       <tr  key={index}>
                                           <td>{index}</td>
                                           <td>{bookinfo.bookName}</td>
                                           <td>{bookinfo.price}</td> 
                                           <td><img src={bookinfo.bookphoto} height="50" width="50" alt=""/></td> 
                                           <td>{bookinfo.qty}</td>
                                           <td>{bookinfo.country}</td>
                                           <td><button className="btn btn-danger" onClick={() => dispatch(removeData(index))}>X</button></td>

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

