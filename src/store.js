import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState={};

const middleware=[thunk];




const store=createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
   ); //it takes three argument.the main reducer which combine all the reducers, the initial state and third party middleware

export default store;