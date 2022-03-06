
import React, { useState } from 'react'
import Create from './create';
import List from './list'
import Update from './update'

const Master = () => {
     const [itemlist,setItemList]=useState([]);
     const [newupdatevalue,setNewupdateValue]=useState("")
    const handleAdd=(data)=>{
        setItemList(itemlist=>[...itemlist,data])

    }
    const handleDelete=(id)=>{
        itemlist.splice(id,1);
        setItemList(itemlist=>[...itemlist])
    }
    const Itemupdate=(ele,id)=>{
        setNewupdateValue({
            ele:ele,
            id:id
        })
    }
    const  newupdateCallback=(data,id)=>{
          itemlist[id]=data
         setItemList({
             itemlist:[...itemlist,data]

         })
    }
  return (
    <div>
        <Create callback={handleAdd}/>
        <List itemlist={itemlist} callback={handleDelete} callbackupdate={Itemupdate}/>
        <Update newupdatevalue={newupdatevalue} newupdateCallback={newupdateCallback}  />

    </div>
  )
}

export default Master