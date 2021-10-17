export const one = () => {
    return {
        type: "PLUS"
    }
};

export const two = () => {
    return {
        type: "MINUS"
    }
};

export const additem = () => {
    var iteminfo = {
        type: "add",
        productname: document.getElementById("itemname").value // to pick the value of textbox
    };
    document.getElementById("itemname").value = ""; // to clear text fields
    return iteminfo;
};

export const saveitem = () => {
    var iteminfo = {
        type: "save",
        itemdetails: {
            name: document.getElementById("pname").value,
            price: document.getElementById("price").value,
            qty: document.getElementById("qty").value
        }
    };
    document.getElementById("pname").value = "";
    document.getElementById("price").value = "";
    document.getElementById("qty").value = "";
    return iteminfo;
}
export const removeitem = (index) => {
    return {
        type: "remove",
        index
    }
}
export const submitData = (data) => {

    var iteminfo = {
        type: "submit",
        "datadetails": data
    };


    return iteminfo

}
export const removeData = (index) => {
    return {
        type: "remove",
        index
    }
}
export const profileget =(users)=>({
    type:"getuser",
    payload:users
})
export const Profileremove =(id)=>({
    type:"remove",
    id:id
})
export const updateProfile=(user)=>({
    type:"update",
    payload:user
    

})




export const profileData = (data) => {

    var iteminfo = {
        type: "submitProfile",
        "profiledetails": data
    };


    return iteminfo

}
// export const removeProfile = (id) => {
//     return {
//         type: "remove",
//         id
//     }
// }
// const updateInfo=(index)=>{
//     return {
//         type: "update",
//         index
//     }
// }
// export const updateProfile=(data)=>{
//     return{
//         type:"update_profile",
//         updateDetailes:data,

//     }
// }




export const productData = (data) => {

    var iteminfo = {
        type: "submitProduct",
        "productdetails": data
    };


    return iteminfo

}
export const removeProduct = (index) => {
    return {
        type: "remove",
        index
    }
}


export const productuserget =(products)=>({
    type:"getproductuser",
    payload:products
})
export const Productuserremove =(id)=>({
    type:"remove",
    id:id
})
export const updateProductUser=(product)=>({
    type:"update",
    payload:product
    

})

export const productUserData = (data) => {
    var iteminfo = {
        type: "submitProductUser",
        payload: data
    };


    return iteminfo

}





//post
export const postGet =(postLists)=>({
    type:"getPost",
    payload:postLists
})
export const postRemove =(id)=>({
    type:"remove",
    id:id
})
export const updatePost=(postList)=>({
    type:"updatePost",
    payload:postList
    

})

export const postData = (data) => {
    var iteminfo = {
        type: "submitPost",
        payload: data
    };


    return iteminfo

}

