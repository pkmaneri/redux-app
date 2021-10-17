import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, } from "react-redux";
import { Link,useParams } from "react-router-dom";
import {  updateProductUser } from './action/myaction';



const EditExampleSeven = () => {
    const { productid } = useParams();

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productQty, setProductQuantity] = useState("")
    const dispatch = useDispatch();

    const updateProduct = () => {
        var data = { productName: productName, productPrice: productPrice, productQty: productQty };
        axios.put("http://localhost:4000/v1/puser/" + productid, data)
            .then(response => {
                console.log(response.data)
            dispatch(updateProductUser(response.data[0]));
            setProductPrice("");
            setProductQuantity("");
            setProductName("")
            getProductUser();

        })
    }

    const getProductUser = () => {
        var url = "http://localhost:4000/v1/pusers/"+ productid;
        axios.get(url)
        .then(response => {
            console.log(response.data)
            setProductName(response.data[0].productName)
            setProductPrice(response.data[0].productPrice)
            setProductQuantity(response.data[0].productQty)
        })
}
       

    useEffect(() => {
        getProductUser();
    }, [true]);
    

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4" >
                        <div className="mb-3" >
                            <label>ProductName</label>
                            <input type="text" placeholder="productName" value={productName}
                                onChange={(e) => setProductName(e.target.value)} class="form-control" />
                        </div>
                        <div className="mb-3" >
                            <label>ProductPrice</label>
                            <input type="number" placeholder="productPrice"
                                onChange={(e) => setProductPrice(e.target.value)} value={productPrice} class="form-control" />
                        </div>
                        <div className="mb-3" >
                            <label>ProductQuantity</label>
                            <input type="number" placeholder="ProductQuantity" value={productQty} onChange={(e) => setProductQuantity(e.target.value)} class="form-control" />
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={updateProduct}>Update</button>
                        <Link to="/reduxseven" className="btn btn-success m-2">Back </Link>
                    </div>
                </div>
            </div>
        </>

    )
}
export default EditExampleSeven;