import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";

const reducer = combineReducers({

});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;