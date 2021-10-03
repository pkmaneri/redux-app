 const product = (state=[], action) =>{
    var productState = Object.assign([], state);
    
    if(action.type==="submitProduct"){
        productState.push(action.productdetails);
        
    }
    if(action.type==="remove"){
        productState.splice(action.index,1);
    }
   
    return productState; 
}

export default product;
