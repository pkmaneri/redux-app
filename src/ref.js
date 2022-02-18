import React, { useRef, useState } from "react";

// uncontrol method
const Ref = () => {
    const [toggle, setToggle] = useState(false)
    const firstname = useRef(null);

    const submitform = (e) => {
        e.preventDefault();
        console.log(firstname.current.value)
        setToggle("firstname")
    }
    return (
        <>
            <form onSubmit={submitform}>
                <div className="mb-3 px-2 py-2">
                    <label htmlFor="from-control"></label>
                    <input type="text" className="from-control" id="firstname" ref={firstname}></input>
                </div>
                <div className="px-2 py-2">
                    <button className="btn btn-primary ">Submit</button>
                </div>
            </form>
            <p>{toggle ? `your first name ${firstname.current.value}` : ""}</p>


        </>
    )
}
export default Ref;