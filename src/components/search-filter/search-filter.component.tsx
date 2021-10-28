import React from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { MdClear } from "react-icons/md";

import "./search-filter.styles.scss";

export function SearchFilter(props: {
  placeholder: string;
  onInputChange: (e: string) => void;
  searchInput: string;
  clearSearchInput: () => void;
}) {
  console.log("placeholder", typeof props.placeholder);
  console.log("onInputChange", typeof props.onInputChange);
  console.log("searchInput", typeof props.searchInput);
  console.log("clearSearchInput", typeof props.clearSearchInput);
  return (
    <div className="search-filter__container">
      <input
        className="search-filter__input"
        type="text"
        placeholder={props.placeholder}
        onChange={(e) => props.onInputChange(e.target.value)}
        value={props.searchInput}
      />
      <AiOutlineSearch className="search-filter__icon" size={20} />
      {props.searchInput.length > 0 ? (
        <MdClear
          onClick={props.clearSearchInput}
          className="search-filter__clear"
        />
      ) : (
        ""
      )}
    </div>
  );
}
