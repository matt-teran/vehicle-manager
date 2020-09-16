import React from 'react';

import classes from './CarSummary.module.css';

const carSummary = (props) => {
    return (
        <div className={classes.CarSummary}>
            <p>Ticket: {props.viewedCar.ticket}</p>
            <p>Phone: {props.viewedCar.phone}</p>
            <p>Plate: {props.viewedCar.plate}</p>
            <p>Make: {props.viewedCar.make}</p>
            <p>Color: {props.viewedCar.color}</p>
        </div>
    )
}

export default carSummary;