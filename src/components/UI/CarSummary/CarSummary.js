import React from 'react';

import Button from '../CarOptionBtn/CarOptionBtn';

import classes from './CarSummary.module.css';

const carSummary = (props) => {
    return (
        <div className={classes.CarSummary}>
            <div className={classes.Info}>
                <p>Ticket: {props.viewedCar.ticket}</p>
                <p>Phone: {props.viewedCar.phone}</p>
                <p>Plate: {props.viewedCar.plate}</p>
                <p>Make: {props.viewedCar.make}</p>
                <p>Color: {props.viewedCar.color}</p>
            </div>
            <div className={classes.CarOptions}>
                <Button clicked={props.checkout} text='Checkout' />
                <Button text='Edit' />
                <Button text='Transfer' />
                <Button text='Request' />
                <Button text='Text Guest' />
            </div>
        </div>
    )
}

export default carSummary;