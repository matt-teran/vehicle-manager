import React from 'react';

import Aux from '../../../hoc/Aux/Aux';

import classes from './Modal.module.css';

const modal = (props) => {
    let showModal = (
        <Aux>
            <div 
                className={classes.Backdrop}
                onClick={props.clicked}></div>
            <div className={classes.Modal}>
                {props.children}
            </div>
        </Aux>
    )

    if (!props.showModal){
        showModal = null;
    }

    return (
        <Aux>
            {showModal}
        </Aux>
    )
}

export default modal;