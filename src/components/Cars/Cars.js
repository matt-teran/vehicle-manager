import React from 'react';

import Car from '../Car/Car';

import classes from './Cars.module.css';

const cars = (props) => {
    let loggedCars = [];
    for (let car in props.cars){
        loggedCars.push(<Car 
            key={car}
            display={props.cars[car].display} 
            ticket={car}
            phone={props.cars[car].phone}
            plate={props.cars[car].plate}
            make={props.cars[car].make}
            color={props.cars[car].color}
            time={props.cars[car].time}/>);
    }
    return (
        <div className={classes.Cars}>
            {loggedCars}
        </div>
    )
}

export default cars;