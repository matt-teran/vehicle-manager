import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';

import Toolbar from '../../components/Toolbar/Toolbar';
import Cars from '../../components/Cars/Cars';

class VehicleManager extends Component{
    render(){
        return (
            <Aux>
                <Toolbar/>
                <Cars/>
            </Aux>
        );
    }
}

export default VehicleManager;