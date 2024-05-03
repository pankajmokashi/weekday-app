// reducers/jobs.js to manage the jobs state
import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
} from "../actions/index.js";

const initialState = {
  jobs: [],
  error: null,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return { ...state, error: null };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        jobs: [...action.payload],
      };
    case FETCH_JOBS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default jobsReducer;
