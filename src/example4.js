import React from "react"
import { submitData, removeData } from './action/myaction';

import { useSelector, useDispatch } from 'react-redux';

const ReduxFour = () => {
    const dataList = useSelector(state => state.dataList) // to fetch data from store

    const dispatch = useDispatch();

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4" >
                        <div className="mb-3" >
                            <label>FullName</label>
                            <input type="text" placeholder="fullName" id="fName" class="form-control" />
                        </div>
                        <div className="mb-3">
                            <lable>City</lable>
                            <select id="city" class="form-control" id="city">
                                <option value="select">Select</option>
                                <option value="patna">Patna</option>
                                <option value="delhi">Delhi</option>
                                <option value="bangalore">Bangalore</option>
                                <option value="mumbai">Mumbai</option>
                            </select>
                        </div>
                        <div className="mb-3" id="gender">
                            <label>Male</label>
                            <input type="radio" value="Male" name="gender" />
                            <label>Female</label>
                            <input type="radio" value="Female" name="gender" />
                        </div>
                        <div className="mb-3 form-check">
                            <input className="form-check-input" type="checkbox" name="available" value="available" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">  Available For Review
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={() => dispatch(submitData())} >Submit</button>

                    </div>
                    <div className="col-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">FullName</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Available</th>
                                    <th scope="col">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {dataList.map((ele, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{ele.fullname}</td>
                                            <td>{ele.city}</td>
                                            <td>{ele.gender + ""}</td>
                                            <td>{ele.available + ""}</td>
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
export default ReduxFour

