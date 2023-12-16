import { combineReducers } from "redux";
import counterSlice from "./counterSlice";
import usersSlice from "./userSlice"
const rootReducer = combineReducers({
    counter: counterSlice,
    user: usersSlice,
})

export default rootReducer;