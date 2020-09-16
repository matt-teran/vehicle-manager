import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import Button from '../UI/Button/Button';
import Search from '../UI/Search/Search';
import Assign from '../UI/Assign/Assign';
import Modal from '../UI/Modal/Modal';

import classes from './Toolbar.module.css';

const toolbar = (props) => (
    <Aux>
        <Modal 
            showModal={props.showModal}
            clicked={props.clicked}>
            <Assign 
                addCar={props.addCar}
                changed={props.changed}
                editedCar={props.editCar}
                disable={props.editing}/>
        </Modal>

        <div className={classes.Toolbar}>
            <div className={classes.ToolbarRow}>
                <p style={{fontFamily: 'Roboto, sans-serif'}}>Now: {props.carCount}</p>
                <Search changed={props.search}/>
            </div>
            <div className={classes.ToolbarRow}>
                <Button text='More'/>
                <Button text='Shift Info'/>
                <Button text='Assign' clicked={props.clicked}/>
            </div>
        </div>
    </Aux>

)

export default toolbar;