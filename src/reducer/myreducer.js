
const myNumber =(state=5,action)=>{
    if(action.type==="PLUS"){
        state += 10;
    };
    if(action.type==="MINUS"){
        state -= 10;
    }
    return state;
}


export default myNumber;