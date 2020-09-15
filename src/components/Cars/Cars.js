import React from 'react';

import Car from '../Car/Car';

import classes from './Cars.module.css';

const cars = () => (
    <div className={classes.Cars}>
        <Car/>
        <Car/>
        <Car/>
        <Car/>
        <Car/>
        <Car/>
    </div>
)

export default cars;