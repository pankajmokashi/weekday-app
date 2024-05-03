//scroll component is used for infinite scroll

import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/actions";
import Card from "./Card";
import SearchBar from "./SearchBar";

const ScrollComponent = () => {
  const [hasMore, setHasMore] = useState(true);
  const [limit, setLimit] = useState(20);

  const dispatch = useDispatch();

  // using useSelector get data from redux store
  const { ...filters } = useSelector((state) => state.filters);
  const { jobs, error } = useSelector((state) => state.jobs);

  // initial call for fetch api using dispatch
  useEffect(() => {
    dispatch(fetchJobs(10, 0)); // Initial fetch with limit 10 and offset 0
  }, [dispatch]);

  const fetchMoreData = async () => {
    dispatch(fetchJobs(limit, 0));
    setLimit((prev) => prev + 10);
    jobs.length > 0 ? setHasMore(true) : setHasMore(false);
  };

  // apply filter will filter data based on selected filters
  let filteredResults = [];
  const applyFilters = () => {
    filteredResults = jobs.filter((job) => {
      let match = true;
      if (
        filters.jobRole.length > 0 &&
        !filters.jobRole.includes(job.jobRole)
      ) {
        match = false;
      }
      if (filters.minExp !== "" && job.minExp > parseInt(filters.minExp)) {
        match = false;
      }
      if (
        filters.minJdSalary !== "" &&
        job.minJdSalary <= parseInt(filters.minJdSalary)
      ) {
        match = false;
      }
      if (
        filters.companyName !== "" &&
        job.companyName?.toLowerCase() !== filters.companyName?.toLowerCase()
      ) {
        match = false;
      }
      return match;
    });
  };
  applyFilters();

  return (
    <InfiniteScroll
      dataLength={jobs.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<Loader />}
    >
      <div className="container">
        <SearchBar />
        <div className="card-container">
          {filteredResults
            ? filteredResults.map((item) => (
                <Card data={item} key={item.jdUid} />
              ))
            : jobs.map((item) => <Card data={item} key={item.jdUid} />)}
        </div>
        {error && <p>Error: {error.message}</p>}
      </div>
    </InfiniteScroll>
  );
};

export default ScrollComponent;
