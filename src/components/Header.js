import React from "react";
import SearchForm from "../UI/SearchForm";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes["header-container"]}>
      <h1 className={classes["app-title"]}>Weather</h1>

      <SearchForm onSubmit={props.onSearchWeather} />
    </header>
  );
};

export default Header;
