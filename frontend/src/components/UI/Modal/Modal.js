import React from 'react';

import Aux from '../../../hoc/Aux/Aux';

import classes from './Modal.module.css';

const modal = (props) => {
    let showModal = (
        <Aux>
            <div 
                className={classes.Backdrop}
                onClick={props.clicked}
                style={{
                    visibility: props.showModal ? 'visible' : 'hidden'}}
                ></div>
            <div 
                className={classes.Modal}
                style={{
                    visibility: props.showModal ? 'visible' : 'hidden',
                    transform: props.showModal ? 'translate(0)' : 'rotateX(-70deg)',
                    opacity: props.showModal ? '1' : 0
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

export default modal;