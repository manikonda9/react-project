import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const initialState = {
    name : "Hello World"
}

const reducer = (state=initialState,action) =>{
    return state;
}

console.log(reducer)

export default combineReducers({
    myReducer : reducer,
    myForm : formReducer
});