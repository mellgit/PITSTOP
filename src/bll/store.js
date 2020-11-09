import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";
import reducerMenu from './reducers/reducerMenu'
import reducerClient from "./reducers/reducerClient"

const reducer = combineReducers({
    reducerMenu,
    reducerClient
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;