import React from "react";
import classes from "./SearchForm.module.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchForm = (props) => {
  return (
    <form className={classes["search-form"]} onSubmit={props.onSubmit}>
      <input
        className={classes["search-input"]}
        type="text"
        placeholder="Enter a city..."
      ></input>
      <button className={classes["search-button"]}>
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchForm;
