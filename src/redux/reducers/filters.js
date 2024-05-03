// reducers/filter.js to manage the filter state
import { UPDATE_FILTERS } from "../actions/index.js";

const initialState = {
  jobRole: [],
  minExp: "",
  location: [],
  minJdsalary: "",
  companyName: "",
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTERS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default filtersReducer;
