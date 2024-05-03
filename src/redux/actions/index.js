// actions/index.js used to update jobs and filters state
export const FETCH_JOBS_REQUEST = "FETCH_JOBS_REQUEST";
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const FETCH_JOBS_FAILURE = "FETCH_JOBS_FAILURE";

export const UPDATE_FILTERS = "UPDATE_FILTERS";

export const fetchJobsRequest = () => ({
  type: FETCH_JOBS_REQUEST,
});

export const fetchJobsSuccess = (jobs) => ({
  type: FETCH_JOBS_SUCCESS,
  payload: jobs,
});

export const fetchJobsFailure = (error) => ({
  type: FETCH_JOBS_FAILURE,
  payload: error,
});

export const updateFilters = (filters) => ({
  type: UPDATE_FILTERS,
  payload: filters,
});

// fetch job function to call api and update jobs state

export const fetchJobs = (limit, offset) => {
  return (dispatch) => {
    dispatch(fetchJobsRequest());
    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ limit, offset }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchJobsSuccess(data.jdList));
      })
      .catch((error) => {
        dispatch(fetchJobsFailure(error));
      });
  };
};
