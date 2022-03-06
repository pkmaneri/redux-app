import React, { useState } from 'react'

const RadioButton = () => {
    const [state, setState] = useState("hindi")
    const [subject, setSubject] = useState(["english","hindi","math"])


    return (
        <>
        {subject.map((ele)=>{
            if(ele ==state){
                return <>{ele}  <input  defaultChecked={true}  onClick={(e) => setState(e.target.value)}
                type="radio" value={ele} name="subject" /></>

            }else{
                return <>{ele}  <input type="radio" value={ele} name="subject" /></>

            }
        })}
            {/* <div className="mb-3" value={state} onChange={(e) => setState(e.target.value)}
             >
                <label>Male</label>
                <input type="radio"  value="Male" name="gender" />
                <label>Female</label>
                <input type="radio" value="Female" name="gender" />
            </div>
            <p>{state}</p> */}
        </>


    )
}
export default RadioButton;
