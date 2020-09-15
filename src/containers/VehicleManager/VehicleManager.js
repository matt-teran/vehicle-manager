import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';

import Toolbar from '../../components/Toolbar/Toolbar';
import Cars from '../../components/Cars/Cars';

class VehicleManager extends Component{
    state = {
        assigning: false
    }
    assignHandler = () => {
        this.setState({assigning: !this.state.assigning});
    }
    render(){
        return (
            <Aux>
                <Toolbar 
                    clicked={this.assignHandler} 
                    showModal={this.state.assigning}/>
                <Cars/>
            </Aux>
        );
    }
}

export default VehicleManager;