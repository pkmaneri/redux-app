import {createStore} from "redux";

import mainreducer  from "./reducer/mainreducer";

const store =createStore(mainreducer, /* preloadedState, */ +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;