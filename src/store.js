import {createStore,applyMiddleware} from "redux";
import logger from "redux-logger";
import mainreducer  from "./reducer/mainreducer";
import thunk from "redux-thunk"
const middleware=[thunk]
if(process.env.NODE_ENV==="development"){
    middleware.push(logger)
}
const store =createStore(mainreducer,applyMiddleware(...middleware) /* preloadedState, */ +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;