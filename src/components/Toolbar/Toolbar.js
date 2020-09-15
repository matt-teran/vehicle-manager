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
                changed={props.changed}/>
        </Modal>

        <div className={classes.Toolbar}>
            <Search changed={props.search}/>
            <div className={classes.Buttons}>
                <Button text='More'/>
                <Button text='Shift Info'/>
                <Button text='Assign' clicked={props.clicked}/>
            </div>
        </div>
    </Aux>

)

export default toolbar;