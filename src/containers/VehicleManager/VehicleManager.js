import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';

import Toolbar from '../../components/Toolbar/Toolbar';
import Cars from '../../components/Cars/Cars';
import Modal from '../../components/UI/Modal/Modal';

class VehicleManager extends Component{
    render(){
        return (
            <Aux>
                <Modal/>
                <Toolbar/>
                <Cars/>
            </Aux>
        );
    }
}

export default VehicleManager;