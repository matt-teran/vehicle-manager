import React from 'react';

import classes from './Button.module.css';

const button = (props) => (
    <button className={classes.Btn} onClick={props.clicked}>{props.text}</button>
)

export default button;