import React from 'react';

import classes from './CarOptionBtn.module.css';

const carOptionBtn = (props) => (
    <button className={classes.CarOptionBtn} onClick={props.clicked}>{props.text}</button>
)

export default carOptionBtn;