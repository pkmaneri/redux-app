const initialState={
    postLists:[],
    postList:{},
    loading:true,
}
const postReducer=(state=initialState,action)=>{
    switch(action.type){
        case "getPost":
            return{
                ...state,
                postLists:action.payload,
                loading:false
            }
            case "remove":
                return{
                    ...state,
                    loading:false
                }
            case "submitPost":
                return{
                    ...state,
                    loading:false
                }
                case "updatePost":{
                    return{
                        ...state,
                        postList:action.payload,
                        loading:false
                    }
                }
            default:
                return state;
    }
}
export default postReducer;