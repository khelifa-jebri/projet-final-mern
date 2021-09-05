import { combineReducers } from "redux";
import carsReducer from "./carsReducer";
import agenciesReducer from "./agenciesReducer";
import usersReducer from "./usersReducer";
import reservationsReducer from "./reservationsReducer"

const rootReducer = combineReducers({
    carsReducer,
    agenciesReducer,
    usersReducer,
    reservationsReducer,
});

export default rootReducer;