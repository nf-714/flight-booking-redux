import { combineReducers } from "redux";
import bookingReducer from "./booking/reducer";

const rootReducer = combineReducers({
  booking: bookingReducer,
});

export default rootReducer;
