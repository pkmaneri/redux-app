

const initialState={
    users:[],
    user:{},
    loading:true,
}
const useReducers=(state=initialState,action)=>{
    switch(action.type){
        case "getuser":
            return{
                ...state,
                users:action.payload,
                loading:false
            }
            case "remove":
                return{
                    ...state,
                    loading:false
                }
                case "update":{
                    return{
                        ...state,
                        user:action.payload,
                        loading:false
                    }
                }
            default:
                return state;
    }
}
export default useReducers;