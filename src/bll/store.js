import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";
import reducerMenu from './reducers/reducerMenu'

const reducer = combineReducers({
    reducerMenu
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;