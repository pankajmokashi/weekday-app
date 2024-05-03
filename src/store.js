// store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import jobsReducer from "./redux/reducers/jobs";
import filtersReducer from "./redux/reducers/filters";

const rootReducer = combineReducers({
  jobs: jobsReducer,
  filters: filtersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
