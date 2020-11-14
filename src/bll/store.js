import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";
import reducerMenu from './reducers/reducerMenu'
import reducerProfile from "./reducers/reducerProfile"
import reducerPersonalData from "./reducers/reducerPersonalData"
import reducerGarage from "./reducers/reducerGarage"

const reducer = combineReducers({
    reducerMenu,
    reducerProfile,
    reducerPersonalData,
    reducerGarage
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;