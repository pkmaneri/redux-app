
const productList = (state=[], action) =>{
    var oldState = Object.assign([], state); // to fetch old state value from store
    
    if(action.type==="save"){
        oldState.push(action.itemdetails);
        
    }
    if(action.type==="remove"){
        oldState.splice(action.index,1);
    }

    return oldState; // list of item from store
}

export default productList;
