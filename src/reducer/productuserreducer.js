const initialState={
    products:[],
    product:{},
    loading:true,
}
const productUserReducer=(state=initialState,action)=>{
    switch(action.type){
        case "getproductuser":
            return{
                ...state,
                products:action.payload,
                loading:false
            }
            case "remove":
                return{
                    ...state,
                    loading:false
                }
            case "submitProductUser":
                return{
                    ...state,
                    loading:false
                }
                case "update":{
                    return{
                        ...state,
                        product:action.payload,
                        loading:false
                    }
                }
            default:
                return state;
    }
}
export default productUserReducer;