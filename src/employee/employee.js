import React, { useEffect, useState } from "react"

import { useSelector, useDispatch } from 'react-redux';
// import { Link } from "react-router-dom";
import axios from "axios";
import { EmployeeData, EmployeeGet, EmployeeRemove } from "../action/myaction";
import { Link } from "react-router-dom";

const Employee = () => {

    const [fullName, setFullName] = useState("");
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("male")
    const [genderList] = useState(["male", "female"])


    const [toggle, setToggle] = useState("listView")


    const { employees } = useSelector(state => state.empData)
    // to fetch data from storedata
    const dispatch = useDispatch();

    const addEmployee = () => {
        var data = { fullName: fullName, age: age, gender: gender, };
        var url = "http://localhost:3001/employee/";
        axios.post(url, data).then(response => {
            console.log(response)
            dispatch(EmployeeData(response.data));
            setFullName("");
            setAge("");
            setGender("")
            getEmployee();
            setToggle("listView")
        })
    }

    const handleDelete = (id) => {
        axios.delete("http://localhost:3001/employee/" + id)
            .then(response => {
                dispatch(EmployeeRemove());
                getEmployee();
            })
    };

    const getEmployee = () => {

        var url = "http://localhost:3001/employee";
        axios.get(url).then(response => {
            console.log(response)
            dispatch(EmployeeGet(response.data))
        })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getEmployee();
    }, [true])

    const handleBack = () => {
        setToggle("listView")
    }


    if (toggle === "createView") {
        return (
            <div className="container" >
                <div className="col-lg-6">
                    <div className="mb-3" >
                        <label htmlFor="form-control">FullName</label>
                        <input type="text" placeholder="FullName" className="form-control"
                            value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div className="mb-3" >
                        <label>Age</label>
                        <input type="text" placeholder="age" onChange={(e) => setAge(e.target.value)}
                            value={age}
                            class="form-control" />
                    </div>

                    <div className="mb-3" >
                        {genderList.map((ele) => {
                            if (ele == gender) {
                                return <>{ele}  <input defaultChecked={true} onClick={(e) => setGender(e.target.value)}
                                    type="radio" value={ele} name="gender" /></>

                            } else {
                                return <>{ele}  <input type="radio" value={ele} name="gender" 
                                onClick={(e) => setGender(e.target.value)} /></>

                            }
                        })}
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={addEmployee.bind(this)}  >Submit</button>
                    <button type="submit" className="btn btn-success m-2" onClick={handleBack}  >Back</button>
                </div>
            </div>
        );
    } else if (toggle === "listView") {
        return (
            <>
                <div className="container" >
                    <button
                        className="btn btn-primary my-2"
                        style={{ float: "right" }}
                        onClick={() => setToggle("createView")}
                    >
                        Employee User
                    </button>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>FullName</th>
                                <th>Age</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees && employees.map((emp, index) => {
                                console.log(emp)
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{emp.fullName}</td>
                                        <td>{emp.age}</td>
                                        <td>{emp.gender}</td>
                                        <td><button className="btn btn-danger" onClick={handleDelete.bind(this, emp.id)}>Delete</button>
                                            <Link className="btn btn-warning m-2" to={`/${emp.id}/editemployee`}>Edit</Link>
                                        </td>

                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </>


        )

    } else {
        return <></>
    }


}
export default Employee;

