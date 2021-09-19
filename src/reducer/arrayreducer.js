
const itemList = (state = [], action) => {
    var oldState = Object.assign([], state); // to fetch old state value from store
    if (action.type === "add") {
        oldState.push(action.productname);
    };
    return oldState; // list of item from store
}


export default itemList;