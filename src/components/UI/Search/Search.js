import React from 'react';
import classes from './Search.module.css';

const search = (props) => (
    <div className={classes.SearchContainer}>
        <input 
            className={classes.Search} 
            type='text' 
            placeholder="Search"
            onChange={props.changed}/>
    </div>
)

export default search;