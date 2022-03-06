const initialState={
    employees:[],
    employee:{},
    loading:true,
}
const EmployeeReducers=(state=initialState,action)=>{
    switch(action.type){
        case "GetEmployee":
            return{
                ...state,
                employees:action.payload,
                loading:false
            }
            case "removeEmployee":
                return{
                    ...state,
                    loading:false
                }
                case "submitEmployee":
                return{
                    ...state,
                    loading:false
                }
                case "updateEmployee":{
                    return{
                        ...state,
                        employee:action.payload,
                        loading:false
                    }
                }
            default:
                return state;
    }
}
export default EmployeeReducers;