import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";
import reducerMenu from './reducers/reducerMenu'
import reducerProfile from "./reducers/reducerProfile"
import reducerPersonalData from "./reducers/reducerPersonalData"
import reducerGarage from "./reducers/reducerGarage"
import reducerBasket from "./reducers/reducerBasket"
import reducerCatalog from "./reducers/reducerCatalog"
import reducerLogin from './reducers/reducerLogin'

const reducer = combineReducers({
    reducerMenu,
    reducerProfile,
    reducerPersonalData,
    reducerGarage,
    reducerBasket,
    reducerCatalog,
    reducerLogin
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;