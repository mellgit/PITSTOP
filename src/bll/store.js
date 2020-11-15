import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";
import reducerMenu from './reducers/reducerMenu'
import reducerProfile from "./reducers/reducerProfile"
import reducerPersonalData from "./reducers/reducerPersonalData"
import reducerGarage from "./reducers/reducerGarage"
import reducerBasket from "./reducers/reducerBasket"

const reducer = combineReducers({
    reducerMenu,
    reducerProfile,
    reducerPersonalData,
    reducerGarage,
    reducerBasket
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;