import React from 'react';

import Button from '../UI/Button/Button';
import Search from '../UI/Search/Search';

import classes from './Toolbar.module.css';

const toolbar = () => (
    <div className={classes.Toolbar}>
        <Search />
        <Button text='More'/>
        <Button text='Info'/>
        <Button text='Assign'/>
    </div>
)

export default toolbar;