import React from "react"
import { submitData, removeData } from './action/myaction';

import { useSelector, useDispatch } from 'react-redux';

const ReduxFour = () => {
    const dataList = useSelector(state => state.dataList)
    console.log(dataList) // to fetch data from store
    const dispatch = useDispatch();

    const addData = () => {

        let gender = "";
        document.getElementsByName('gender').forEach((ele) => {
            if (ele.checked === true) {
                gender = ele.value
                console.log(gender)
            }
        });
        let available = "";
        document.querySelectorAll('[name="available"]').forEach((ele) => {
            if (ele.checked === true) {
                available = ele.value
                console.log(available)
            }
        });

        let data = {
            fullname: document.getElementById("fName").value,
            mobile: document.getElementById("mobile").value,
            city: document.getElementById("city").value,
            comment: document.getElementById("textarea").value,
            available, gender
        }

        console.log(data)

        dispatch(submitData(data));

        // reset
        document.getElementById("fName").value = "";
        document.getElementById("mobile").value = "";
        document.getElementById("city").value = "";
        document.getElementById("textarea").value = "";
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4" >
                        <div className="mb-3" >
                            <label>FullName</label>
                            <input type="text" placeholder="fullName" id="fName" class="form-control" />
                        </div>
                        <div className="mb-3" >
                            <label>Mobile</label>
                            <input type="number" placeholder="mobile" id="mobile" class="form-control" />
                        </div>
                        <div className="mb-3">
                            <lable>City</lable>
                            <select id="city" class="form-control" >
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
                        <div class="form-floating">
                            <textarea class="form-control" id="textarea"></textarea>
                            <label >Comments</label>
                        </div>
                        <div className="mb-3 form-check">
                            <input className="form-check-input" type="checkbox" name="available" value="available" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">  Available For Review
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={addData.bind(this)} >Submit</button>

                    </div>
                    <div className="col-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>FullName</th>
                                    <th>Mobile</th>
                                    <th>City</th>
                                    <th>Gender</th>
                                    <th>Comments</th>
                                    <th>Available</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {dataList.map((ele, index) => {
                                    console.log(ele)
                                    return (
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{ele.fullname}</td>
                                            <td>{ele.mobile}</td>
                                            <td>{ele.city}</td>
                                            <td>{ele.gender + ""}</td>
                                            <td>{ele.comment}</td>
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

