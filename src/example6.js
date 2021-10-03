import React, { useState } from "react"
import { productData, removeProduct } from './action/myaction';

import { useSelector, useDispatch } from 'react-redux';

const ReduxSix = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("")


    const product = useSelector(state => state.product)
    // to fetch data from store
    const dispatch = useDispatch();

    const addProduct = () => {
        var data = { productName: productName, productPrice: productPrice };
  
                dispatch(productData(data))
                setProductName("")
                setProductPrice("")

    }



    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4" >
                        <div className="mb-3" >
                            <label>ProductName</label>
                            <input type="text" placeholder="productName" class="form-control" value={productName} onChange={(e) => setProductName(e.target.value)} />
                        </div>
                        <div className="mb-3" >
                            <label>Product Price</label>
                            <input type="number" placeholder="productPrice" class="form-control" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                        </div>

                        <button type="submit" class="btn btn-primary" onClick={addProduct.bind(this)}  >Submit</button>
                    </div>
                    <div className="col-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ProductName</th>
                                    <th>ProductPrice</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {product.map((productinfo, index) => {
                                    // console.log(productinfo)
                                    return (
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{productinfo.productName}</td>
                                            <td>{productinfo.productPrice}</td>
                                            <td><button className="btn btn-danger" onClick={() => dispatch(removeProduct(index))}>Delete</button>
                                            
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
export default ReduxSix;

