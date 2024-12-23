import { combineReducers } from "@reduxjs/toolkit";
import sampleSlice from "../store/sample/sampleSlice";

const rootReducer = (asyncReducers) => (state, action) => {
  const combineReducer = combineReducers({
    sampleSlice,
    ...asyncReducers,
  });
  return combineReducer(state, action);
};

export default rootReducer;
