import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { EmployeeUpdate } from "../action/myaction";


const EmployeeEdit = () => {
    const [fullName, setFullName] = useState("");
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [genderList] = useState(["male", "female"])
    const [toggle,setToggle]=useState(false)

    const dispatch = useDispatch();

    const { employeeid } = useParams()
    alert(employeeid)
    const updataEmployee = () => {
        var data = { fullName: fullName, age: age, gender: gender };
        axios.put("http://localhost:3001/employee/" + employeeid, data)
            .then(response => {
                console.log(response)
                dispatch(EmployeeUpdate(response.data));
                setFullName("");
                setAge("");
                setGender("")
                getEmployee();
                setToggle("/employee")

            })

    }
    const getEmployee = () => {
        // alert(1)
        var url = "http://localhost:3001/employee/" + employeeid;
        axios.get(url)
            .then(response => {
                console.log(response.data)
                setFullName(response.data.fullName)
                setAge(response.data.age)
                setGender(response.data.gender)
            })
    }
    useEffect(() => {
        getEmployee();
    }, [true])

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
                <button type="submit" className="btn btn-primary  m-2" onClick={updataEmployee.bind(this)}>Update</button>
                <Link to="/employee" className="btn btn-primary">Back </Link>

            </div>
        </div>
    )
}
export default EmployeeEdit;