import React from 'react';

import Button from '../CarOptionBtn/CarOptionBtn';

import classes from './CarSummary.module.css';

const carSummary = (props) => {
    const car = {...props.viewedCar} || {};
    return (
        <div 
            className={classes.CarSummary}>
            <div 
                className={classes.Info}
                style={{
                    transform: car.ticket ? 'translate(0) scale(1)' : 'translate(95%, 95%) scale(0)',
                    opacity: car.ticket ? '1' : '0'
            }}>
                <p>Ticket: {car.ticket}</p>
                <p>Phone: {car.phone}</p>
                <p>Plate: {car.plate}</p>
                <p>Make: {car.make}</p>
                <p>Color: {car.color}</p>
            </div>
            <div className={classes.CarOptions}>
                <Button clicked={props.checkout} text='Checkout' />
                <Button clicked={props.edit}text='Edit' />
                <Button text='Transfer' />
                <Button text='Request' />
                <Button text='Text Guest' />
            </div>
        </div>
    )
}

export default carSummary;