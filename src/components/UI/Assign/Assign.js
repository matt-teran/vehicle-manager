import React from 'react';
import classes from './Assign.module.css';

const assign = () => {
    return (
        <form className={classes.Form}>
            <input className={classes.Input} type="text" placeholder="Ticket #"/>
            <input className={classes.Input} type="text" placeholder="Phone #"/>
            <input className={classes.Input} type="text" placeholder="License Plate #"/>
            <select className={classes.Input} name="make" id="make-select">
                <option value=''>--Make--</option>
                <option value='kia'>Kia</option>
                <option value='honda'>Honda</option>
                <option value='toyota'>Toyota</option>
            </select> 
            <select className={classes.Input} name="color" id="color-select">
                <option value=''>--Color--</option>
                <option value='black'>Black</option>
                <option value='red'>Red</option>
                <option value='white'>White</option>
            </select> 
            <input className={classes.Input} type="submit" value="Save"/>
        </form>
    )
}

export default assign;