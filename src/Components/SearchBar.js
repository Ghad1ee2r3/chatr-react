import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onChange }) => (
  <div>
    <div className="input-group my-3">
      <input
        className="ml-3"
        type="text"
        placeholder="Search channel"
        onChange={(event) => onChange(event.target.value)}
        style={{ width: "60%" }}
      />
      <div className="input-group-append">
        <span className="input-group-text"></span>
      </div>
    </div>
  </div>
);

export default SearchBar;
