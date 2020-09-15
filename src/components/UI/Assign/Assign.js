import React from 'react';
import classes from './Assign.module.css';

const assign = (props) => {
    return (
        <form className={classes.Form}
            onSubmit={props.addCar}>
            <input className={classes.Input} type="text" placeholder="Ticket #" onChange={props.changed} id="ticket"/>
            <input className={classes.Input} type="text" placeholder="Phone #" onChange={props.changed} id="phone"/>
            <input className={classes.Input} type="text" placeholder="License Plate #" onChange={props.changed} id="plate"/>
            <select className={classes.Input} name="make" id="make" onChange={props.changed}>
                <option value=''>--Make--</option>
                <option value='kia'>Kia</option>
                <option value='honda'>Honda</option>
                <option value='toyota'>Toyota</option>
            </select> 
            <select className={classes.Input} name="color" id="color" onChange={props.changed}>
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