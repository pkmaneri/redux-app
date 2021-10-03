import React, { useEffect, useState } from "react"
import {updateProfile  } from './action/myaction';

import {  useDispatch } from 'react-redux';
import { Link,useParams } from "react-router-dom";
import axios from "axios";
const EditExample = () => {
    const { bookid } = useParams();

    const [bookName,setBookName]=useState("");
    const [price,setPrice]=useState("")
    const [qty,setQuantity]=useState("")
    const [bookphoto,setPhoto]=useState("")
    const [country,setCountry]=useState("")
    
    const dispatch = useDispatch();

    const profileUpdate=()=>{
        var data = { bookName: bookName, price: price, qty: qty,country:country ,bookphoto:bookphoto};
        axios.put("http://localhost:3001/user/"+bookid, data)
        .then(response=>{
            console.log(response)
            dispatch(updateProfile(response.data));
          
            getProfile();
            
        })
    }

    const getProfile=()=>{
        var url = "http://localhost:3001/user/"+ bookid;
        axios.get(url)
            .then(response => {
                setBookName(response.data.bookName)
                setCountry(response.data.country)
                setPhoto(response.data.bookphoto)
                setPrice(response.data.price)
                setQuantity(response.data.qty)

            })
        }
    useEffect(()=>{
        getProfile();
    },[])
   
   
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
                        <Link to="/reduxfive" className="btn btn-success m-2">Back </Link>
                    <button className="btn btn-warning m-2" onClick={profileUpdate}> Update</button>
                      
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default EditExample;

