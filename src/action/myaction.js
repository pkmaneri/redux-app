
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
export const submitData = () => {
    var gender = undefined;
    var available = undefined;
    var iteminfo = {
        type: "submit",
        datadetails: {
            "fullname": document.getElementById("fName").value,
            "city": document.getElementById("city").value,
            "available": document.querySelectorAll('[name="available"]').forEach((ele) => {
                if (ele.checked === true) {
                    available = ele.value
                    console.log(available)
                }
            }),
            "gender": document.querySelectorAll('[name="gender"]').forEach((ele) => {
                if (ele.checked === true) {
                    gender = ele.value
                    console.log(gender)
                }

            })
        }
        
    };
    document.getElementById("fName").value = "";
    document.getElementById("city").value = "";



    return iteminfo

}
export const removeData = (index) => {
    return {
        type: "remove",
        index
    }
}
