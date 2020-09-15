import React from 'react';

import Car from '../Car/Car';

import classes from './Cars.module.css';

const cars = (props) => {
    let loggedCars = [];
    for (let car in props.cars){
        loggedCars.push(<Car key={car} ticket={car}/>);
    }
    return (
        <div className={classes.Cars}>
            {loggedCars}
        </div>
    )
}

export default cars;