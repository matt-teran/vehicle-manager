import React from 'react';

import classes from './Car.module.css';

const car = (props) => {
    return (
        <div className={classes.Car}>
            {props.ticket}
        </div>
    )
}

export default car;