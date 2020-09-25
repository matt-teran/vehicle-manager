import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import Button from '../UI/Button/Button';
import Search from '../UI/Search/Search';
import Assign from '../UI/Assign/Assign';
import More from '../UI/More/More';
import Modal from '../UI/Modal/Modal';

import classes from './Toolbar.module.css';

const toolbar = (props) => {
    const assign = props.assigning ? <Assign addCar={props.addCar} changed={props.changed} editedCar={props.editCar} disable={props.editing}/> : null;
    const more = props.openMore ? <More /> : null
    return (
        <Aux>
            <Modal 
                showModal={assign || more ? true : false}
                clicked={props.closeModal}>
                {assign}
                {more}
            </Modal>

            <div className={classes.Toolbar}>
                <div className={classes.ToolbarRow}>
                    <p style={{fontFamily: 'Roboto, sans-serif'}}>Now: {props.carCount}</p>
                    <Search changed={props.search}/>
                </div>
                <div className={classes.ToolbarRow}>
                    <Button clicked={props.more}>More</Button>
                    <Button>Shift Info</Button>
                    <Button clicked={props.assign}>Assign</Button>
                </div>
            </div>
        </Aux>
    )
}

export default toolbar;