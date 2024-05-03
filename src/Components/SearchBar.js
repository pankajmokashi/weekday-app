import React from "react";
import Filters from "./Filters";
import { updateFilters } from "../redux/actions";
import { useDispatch } from "react-redux";


// Already extracted filter dropdown data and passed to respective filter
const jobRoles = ["frontend", "ios", "android", "tech lead", "backend"];

// const noOfEmployee = [
//   "1-10",
//   "11-20",
//   "21-50",
//   "511-100",
//   "101-200",
//   "201-500",
//   "500+",
// ];

const minExp = ["1", "2", "3", "4", "5", " 6", "7", "8", "9", "10"];

const remote = ["Remote", "Hybrid", "In-Office"];

const salary = ["0", "10k", "20k", "30k", "40k", "50k", "60k", "70k"];

const company = [
  "Dropbox",
  "LG",
  "Sony",
  "Adobe Systems",
  "HP",
  "eBay",
  "Tencent",
  "Apple",
  "Asus",
  "Intel Corporation",
  "Rakuten",
  "Samsung",
  "Dell Technologies",
  "Cisco",
  "Oracle",
  "Baidu",
  "Amazon",
  "Olympus",
  "Alibaba",
  "GoPro",
  "Twitter",
  "ZTE",
  "Netflix",
  "MasterCard",
  "Facebook",
  "IBM",
  "Intel",
  "Google",
  "Huawei",
  "Adobe",
  "Pandora",
  "Nikon",
  "Lyft",
  "Spotify",
  "PayPal",
  "Visa",
  "Adobe Inc.",
  "Sharp",
  "Qualcomm",
  "Yahoo",
  "Panasonic",
  "Xiaomi",
  "Microsoft",
  "Tesla",
  "Epson",
  "Airbnb",
  "Canon",
  "Vimeo",
  "Uber",
  "LinkedIn",
];

function SearchBar() {
  const dispatch = useDispatch();

  // update the redux filter state
  const handleChange = (identifier, newValues) => {
    dispatch(updateFilters({ [identifier]: newValues }));
  };

  return (
    <div className="searchbar">
      <Filters
        id="jobRole"
        placeholder="Roles"
        values={true}
        data={jobRoles}
        handleChange={handleChange}
      />
      {/* <Filters
        id="noOfEmp"
        placeholder="No of Employees"
        values={true}
        data={noOfEmployee}
        handleChange={handleChange}
      /> */}
      <Filters
        id="minExp"
        placeholder="Experience"
        values={false}
        data={minExp}
        handleChange={handleChange}
      />
      <Filters
        id="remote"
        placeholder="Remote"
        values={true}
        data={remote}
        handleChange={handleChange}
      />
      <Filters
        id="minJdSalary"
        placeholder="Minimum Base Pay Salay"
        values={false}
        data={salary}
        handleChange={handleChange}
      />
      <Filters
        id="companyName"
        placeholder="Search Company Name"
        values={false}
        data={company}
        handleChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
