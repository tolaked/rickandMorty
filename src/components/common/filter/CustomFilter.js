import React from "react";
import CustomDropdown from "./CustomDropdown";
import './Dropdown.scss'
const CustomFilter = ({ setFilterParam, setSearchParams, searchParams }) => {
  return (
      <div className="custom-filter">
        <div className="gender-filter">
          <button>
            <CustomDropdown
              filterParamItems={["male", "female"]}
              setFilterParam={setFilterParam}
              filterParam="Filter by gender"
              setSearchParams={setSearchParams}
              searchParams={searchParams}
            />
          </button>
        </div>
        <div className="filter-input">
          <button>Filter by name</button>
          <input
            value={searchParams.get("name") || ""}
            onChange={(e) => {
              searchParams.set("name", e.target.value);
              setSearchParams(searchParams);
            }}
          />
        </div>
        <button className="clear-filters" onClick={() => setSearchParams()}>
          clear filters
        </button>
      </div>
  );
};

export default CustomFilter;

