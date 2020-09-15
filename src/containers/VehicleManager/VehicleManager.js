import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';

import Toolbar from '../../components/Toolbar/Toolbar';
import Cars from '../../components/Cars/Cars';

class VehicleManager extends Component{
    state = {
        cars: {
            101: {
                ticket: '101',
                phone: '8675309',
                plate: '123ABCD',
                make: 'kia',
                color: 'red'
            },
            102: {
                ticket: '102',
                phone: '0001111',
                plate: 'ABC1234',
                make: 'toyota',
                color: 'black'
            }

        },
        newCar: {},
        assigning: false
    }
    assignHandler = () => {
        this.setState({newCar: {}, assigning: !this.state.assigning});
    }
    addCarHandler = (event) => {
        event.preventDefault();
        this.assignHandler();

        let updatedCars = {...this.state.cars};
        updatedCars[this.state.newCar.ticket] = this.state.newCar;

        this.setState({cars: updatedCars, newCar: {}})

    }
    inputChangedHandler = (event) => {
        let updatedNewCar = {...this.state.newCar};
        updatedNewCar[event.target.id] = event.target.value;
        this.setState({newCar: updatedNewCar});
    }
    render(){
        return (
            <Aux>
                <Toolbar 
                    clicked={this.assignHandler}
                    showModal={this.state.assigning}
                    addCar={this.addCarHandler}
                    changed={(event) => this.inputChangedHandler(event)}/>
                <Cars 
                    cars={this.state.cars}/>
            </Aux>
        );
    }
}

export default VehicleManager;