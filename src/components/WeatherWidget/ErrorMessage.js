import React from "react";
import classes from "./ErrorMessage.module.css"

const CityError = (props) => {
  const { errorMessage } = props;
  return (
    <div className={classes.container}>
      <h2>{errorMessage}</h2>
    </div>
  );
};

export default CityError;
