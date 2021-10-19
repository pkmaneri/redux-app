import React, { useReducer } from "react";
// dispatch  to trigger the action method perform
const initialState = 0;
const reducer = (state, action) => {
    // console.log(state,action)
    if (action.type === "Increment") {
        return state + 1;
    }
    if (action.type === "Decrement") {
        return state - 5;

    }
    return state;
}
const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div className="container">
                <button className="btn btn-primary m-3" onClick={() => dispatch({ type: "Increment" })}>Inc</button>
                <button className="btn btn-primary" onClick={() => dispatch({ type: "Decrement" })}>Dec</button>
                <p>{state}</p>
            </div>

        </>
    )
}
export default Reducer;