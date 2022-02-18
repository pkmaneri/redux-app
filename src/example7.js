import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productuserget, Productuserremove, productUserData } from './action/myaction';


const ReduxSeven = () => {

    const [productName, setProductName] = useState("");
    const [toggle, setToggle] = useState("listview");
    const [productPrice, setProductPrice] = useState("");
    const [productQty, setProductQuantity] = useState("")
    const { products } = useSelector(state => state.userdata)
    const dispatch = useDispatch();

    const addProductUser = () => {
        var data = { productName: productName, productPrice: productPrice, productQty: productQty };
        var url = "http://localhost:4000/v1/puser/";
        axios.post(url, data).then(response => {
            // console.log(response)
            dispatch(productUserData(response.data));
            setProductPrice("");
            setProductQuantity("");
            setProductName("")
            getProductUser();

        })
    }

    const handleDelete = (id) => {
        axios.delete("http://localhost:4000/v1/puser/" + id)
            .then(response => {
                console.log(response.data)
                dispatch(Productuserremove());
                getProductUser();
            })
    };
    const getProductUser = () => {
        var url = "http://localhost:4000/v1/pusers";
        axios.get(url).then(response => {
            // console.log(response)
            dispatch(productuserget(response.data));
            setToggle("listView")
        })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getProductUser();
    },[])

    const handleBack=()=>{
        setToggle("listView")
    }


    if (toggle === "createView") {
        return (
            <div className="container" >
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
                <button type="submit" class="btn btn-primary" onClick={addProductUser.bind(this)} >Submit</button>
                <button type="button" className="btn btn-success m-2" onClick={handleBack}  >Back</button>

            </div>
        )
    } else if (toggle === "listView") {
        return (
            <div className="container">
                <button
                        className="btn btn-primary my-2"
                        style={{ float: "right" }}
                        onClick={() => setToggle("createView")}
                    >
                        Create User
                    </button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ProductName</th>
                            <th>ProductPrice</th>
                            <th>ProductQuantity</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map((productname, index) => {

                            const _id = productname._id
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{productname.productName}</td>
                                    <td>{productname.productPrice}</td>
                                    <td>{productname.productQty}</td>
                                    
                                    <td><button className="btn btn-danger" 
                                            onClick={handleDelete.bind(this,_id)}>Delete</button>
                                        <Link className="btn btn-warning m-2"
                                            to={`/${_id}/editexampleseven`}>Edit</Link>
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    } else {
        return (
            <></>
        )

    }

    
}
export default ReduxSeven;