import { useMemo,useState } from "react"
const UseMemo=()=>{
    const [count,setCount]=useState(0)
    const [item,setItem]=useState(10)

    // usememo basically callback function return.
    // usememo improve optimization of application.
    
    const multicountusememo=useMemo(function multiCount(){
            console.log("multiCount")
           return count*5
        },[count])
    // function multiCount(){
    //     console.log("multiCount")
    //    return count*5
    // }

    return (
        <div>
            <h1>count:{count}</h1>
            <h1>item:{item}</h1>
            <h2>{multicountusememo}</h2>
            {/* <h1>multicount:{multiCount()}</h1> */}
            <button onClick={()=>setCount(count+1)}>update Count</button>
            <button onClick={()=>setItem(item*10)}>update Item</button>
        </div>

    )
}
export default UseMemo;