import React from 'react';
import classes from './Search.module.css';

const search = () => (
    <div className={classes.SearchContainer}>
        <input className={classes.Search} type='text' placeholder="Search"/>
    </div>
)

export default search;