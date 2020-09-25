import React from "react";

import Btn from '../Button/Button';
import CarOptionBtn from "../CarOptionBtn/CarOptionBtn";

import classes from "./CarSummary.module.css";

const carSummary = (props) => {
  const car = { ...props.viewedCar } || {};
  return (
    <div className={classes.CarSummary}>
        <div
            className={classes.Info}
            style={{
            transform: car.ticket ? "translate(0) scale(1)" : "translate(95%, 95%) scale(0)",
            opacity: car.ticket ? "1" : "0",
            }}
        >
            <div className={classes.Attributes}>
                <p>Ticket: {car.ticket}</p>
                <p>Phone: {car.phone}</p>
                <p>Plate: {car.plate}</p>
                <p>Spot: {car.spot}</p>
                <p>Make: {car.make}</p>
                <p>Color: {car.color}</p>
            </div>
            <button className={classes.CloseModal} onClick={props.closeModal}>X</button>
        </div>
        <div className={classes.CarOptions}>
            <CarOptionBtn clicked={props.checkout} text="Checkout" />
            <CarOptionBtn clicked={props.edit} text="Edit" />
            <CarOptionBtn text="Transfer" />
            <CarOptionBtn text="Request" />
            <CarOptionBtn text="Text Guest" />
        </div>
    </div>
  );
};

export default carSummary;
