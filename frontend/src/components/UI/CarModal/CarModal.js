import React from 'react';

import Aux from '../../../hoc/Aux/Aux';

import classes from './CarModal.module.css';

const carModal = (props) => {
    let showModal = (
        <Aux>
            <div className={classes.carModal}>
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

export default carModal;