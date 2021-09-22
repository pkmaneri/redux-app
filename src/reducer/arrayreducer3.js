const dataList = (state=[], action) =>{
    var dataState = Object.assign([], state); // to fetch old state value from store
    
    if(action.type==="submit"){
        dataState.push(action.datadetails);
        
    }
    if(action.type==="remove"){
        dataState.splice(action.index,1);
    }

    return dataState; // list of item from store
}

export default dataList;
