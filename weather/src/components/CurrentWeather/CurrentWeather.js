import React from "react";
import classes from "./CurrentWeather.module.scss";
import PartlyCloudy from "../../assets/icons/PartlyCloudy";
import Cloudy from "../../assets/icons/Cloudy";
import Sun from "../../assets/icons/Sun";
import Cloud from "../../assets/icons/Cloud";

const CurrentWeather = () => {
  return (
    <div className={classes.box}>
      {/* <div className={classes.icon_container}> */}
      <div className={classes.grid}>
        <div className={classes.test}>dsd</div>
        <div className={classes.test}>ss{/* <PartlyCloudy /> */}</div>
      </div>
    </div>
  );
};

export default CurrentWeather;
