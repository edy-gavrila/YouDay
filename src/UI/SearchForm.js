import React, { useRef } from "react";
import classes from "./SearchForm.module.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchForm = (props) => {
  const searchBoxRef = useRef();
  return (
    <form
      className={classes["search-form"]}
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(searchBoxRef.current.value);
      }}
    >
      <input
        className={classes["search-input"]}
        type="text"
        placeholder="Enter a city..."
        ref={searchBoxRef}
        required
      ></input>
      <button className={classes["search-button"]}>
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchForm;
