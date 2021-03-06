import React from 'react';
import classes from './Assign.module.css';

const assign = (props) => {
    return (
        <form className={classes.Form}
            onSubmit={props.addCar}>
            <input className={classes.Input} type="text" placeholder="Ticket #" onChange={props.changed} id="ticket" value={props.editedCar.ticket} readOnly={props.disable ? 'readonly' : null}/>
            <input className={classes.Input} type="text" placeholder="Phone #" onChange={props.changed} id="phone" value={props.editedCar.phone}/>
            <input className={classes.Input} type="text" placeholder="License Plate #" onChange={props.changed} id="plate" value={props.editedCar.plate}/>
            <input className={classes.Input} type="text" placeholder="Spot" onChange={props.changed} id="spot" value={props.editedCar.spot}/>
            <select className={classes.Input} name="make" id="make" onChange={props.changed} value={props.editedCar.make}>
                <option value=''>--Make--</option>
                <option value='chevrolet'>Chevrolet</option>
                <option value='ford'>Ford</option>
                <option value='gmc'>GMC</option>
                <option value='kia'>Kia</option>
                <option value='honda'>Honda</option>
                <option value='toyota'>Toyota</option>
            </select> 
            <select className={classes.Input} name="color" id="color" onChange={props.changed} value={props.editedCar.color}>
                <option value=''>--Color--</option>
                <option value='beige'>Beige</option>
                <option value='black'>Black</option>
                <option value='blue'>Blue</option>
                <option value='brown'>Brown</option>
                <option value='gray'>Gray</option>
                <option value='maroon'>Maroon</option>
                <option value='orange'>Orange</option>
                <option value='pink'>Pink</option>
                <option value='purple'>Purple</option>
                <option value='red'>Red</option>
                <option value='white'>White</option>
                <option value='yellow'>Yellow</option>
            </select> 
            <input className={classes.Input} type="submit" value="Save"/>
        </form>
    )
}

export default assign;