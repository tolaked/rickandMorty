import React, { useState } from "react";
import { dropdownCaret } from "../../../assets/Icons";
import './Dropdown.scss'

const CustomDropdown = ({ filterParamItems, filterParam,  setSearchParams, searchParams
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="custom-dropdown">
      <div
        onClick={() => setOpenDropdown(!openDropdown)}
        className="custom-dropdown__single-item"
      >
        <p>{filterParam}</p>
        <div>{dropdownCaret}</div>
      </div>
      {openDropdown && (
        <div className="custom-dropdown__dropdown-list">
          {filterParamItems.map((item) => (
            <p onClick={() =>{
              console.log('clicked')
              searchParams.set("gender",item)
              setSearchParams(searchParams)
            }} key={item}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
};
export default CustomDropdown;
