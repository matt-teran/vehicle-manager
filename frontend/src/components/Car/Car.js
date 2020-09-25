import React from "react";

import classes from "./Car.module.css";

const car = (props) => {
  let timeSince = (date) => {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = seconds / 31536000;
    let finalTime = ''; 

    if (interval > 1) {
      finalTime += Math.floor(interval) + "y ";
      seconds -= Math.floor(interval) * 31536000;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      finalTime += Math.floor(interval) + "m ";
      seconds -= Math.floor(interval) * 2592000;
    }
    interval = seconds / 86400;
    if (interval > 1) {
      finalTime += Math.floor(interval) + "d ";
      seconds -= Math.floor(interval) * 86400;
    }
    interval = seconds / 3600;
    if (interval > 1) {
        finalTime += Math.floor(interval) + "h ";
        seconds -= Math.floor(interval) * 3600;
    }
    interval = seconds / 60;
    if (interval > 1) {
      finalTime += Math.floor(interval) + "m";
    }
    console.log(props.display);
    return finalTime;
  };
  return (
    <div 
      className={props.focus ? `${classes.Car} ${classes.CarFocus}` : classes.Car} 
      style={props.display ? {display: 'flex'} : {display: 'none'}}
      onClick={(ticket)=>props.clicked(props.ticket)}>
      <p className={classes.Ticket}>{props.ticket}</p>
      <p className={classes.Time}>{timeSince(props.time)}</p>
    </div>
  );
};

export default car;