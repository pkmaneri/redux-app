import {createStore} from "redux";

import mainreducer  from "./reducer/mainreducer";

const store =createStore(mainreducer);
export default store;