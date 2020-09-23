import React from 'react';

import Aux from '../../../hoc/Aux/Aux';

import classes from './CarModal.module.css';

const carModal = (props) => {
    let showModal = (
        <Aux>
            <div 
                className={classes.carModal}
                style={{
                    transform: props.showModal ? 'translateY(0) scale(1)' : 'translateY(40vh) scale(0)'
                }}>
                {props.children}
            </div>
        </Aux>
    )

    // if (!props.showModal){
    //     showModal = null;
    // }

    return (
        <Aux>
            {showModal}
        </Aux>
    )

}

export default carModal;