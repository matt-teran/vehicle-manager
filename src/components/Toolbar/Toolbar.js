import React from 'react';

import Button from '../UI/Button/Button';
import Search from '../UI/Search/Search';

import classes from './Toolbar.module.css';

const toolbar = () => (
    <div className={classes.Toolbar}>
        <Search />
        <div className={classes.Buttons}>
            <Button text='More'/>
            <Button text='Shift Info'/>
            <Button text='Assign'/>
        </div>
    </div>
)

export default toolbar;