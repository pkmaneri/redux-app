
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

export const profileData = (data) => {
     
    var iteminfo = {
        type: "submitProfile",
         "profiledetails": data
    };

    
    return iteminfo

}
export const removeProfile = (index) => {
    return {
        type: "remove",
        index
    }
}
