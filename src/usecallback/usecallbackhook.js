import React, { useState } from 'react'

const usecallbackhook = () => {
    const [number,setNumber]=useState("")
    const [dark,setDark]=useState(false)
    const getList=()=>{
        return [number,number+1,number+2]
    }
    const theme={
        background:dark?'#333':'#FFF',
        color:dark?'#FFF':'#333'
    }
  return (
    <div></div>
  )
}

export default usecallbackhook