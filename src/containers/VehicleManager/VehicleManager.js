import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';

import Toolbar from '../../components/Toolbar/Toolbar';
import Cars from '../../components/Cars/Cars';

class VehicleManager extends Component{
    state = {
        cars: {
            101: {
                display: true,
                focus: false,
                ticket: '101',
                phone: '8675309',
                plate: '123ABCD',
                make: 'honda',
                color: 'white',
                time: new Date("Aug 13, 2020 00:40:20")
            },
            102: {
                display: true,
                focus: false,
                ticket: '102',
                phone: '4132456',
                plate: '123ABCD',
                make: 'kia',
                color: 'red',
                time: new Date("Sep 13, 2020 02:40:20")
            },
            103: {
                display: true,
                focus: false,
                ticket: '103',
                phone: '5373608',
                plate: '123ABCD',
                make: 'toyota',
                color: 'black',
                time: new Date("Sep 14, 2020 00:30:20")
            }
        },
        newCar: {display: true},
        assigning: false,
        viewing: false,
        viewingCar: null,
        editing: false
    }
    assignHandler = () => {
        this.setState({newCar: {display: true}, assigning: !this.state.assigning});
    }
    addCarHandler = (event) => {
        event.preventDefault();
        let updatedNewCar = {...this.state.newCar};
        if (!updatedNewCar.time)updatedNewCar.time = new Date();
        let updatedCars = {...this.state.cars};
        updatedCars[this.state.newCar.ticket] = updatedNewCar;
        
        this.assignHandler();
        this.setState({cars: updatedCars})

    }
    inputChangedHandler = (event) => {
        let updatedNewCar = {...this.state.newCar};
        updatedNewCar[event.target.id] = event.target.value;
        this.setState({newCar: updatedNewCar});
    }
    searchHandler = (event) => {

        let updatedCars = {...this.state.cars}
        for (let car in updatedCars){
            if (updatedCars[car].ticket.indexOf(event.target.value) !== -1){
                updatedCars[car].display = true;
            } else if (updatedCars[car].phone.indexOf(event.target.value) !== -1){
                updatedCars[car].display = true;
            } else if (updatedCars[car].plate.indexOf(event.target.value) !== -1){
                updatedCars[car].display = true;
            } else if (updatedCars[car].make.indexOf(event.target.value) !== -1){
                updatedCars[car].display = true;
            } else if (updatedCars[car].color.indexOf(event.target.value) !== -1){
                updatedCars[car].display = true;
            } else { updatedCars[car].display = false}
        }
        this.setState({cars: updatedCars});
    }
    carClickedHandler = (ticket) => {
        let updatedCars = {...this.state.cars};
        for (let car in updatedCars){
            updatedCars[car].focus = car === ticket ? true : false;
        }
        this.setState({cars: updatedCars, viewing: true, viewingCar: ticket});
    }
    checkoutHandler = () => {
        let updatedCars = {...this.state.cars};
        delete updatedCars[this.state.viewingCar];
        this.setState({cars: updatedCars, viewing: false, viewingCar: null});
    }
    editHandler = () => {
        this.setState({newCar: this.state.cars[this.state.viewingCar], assigning: !this.state.assigning, editing: true});
    }
    render(){
        return (
            <Aux>
                <Toolbar 
                    clicked={this.assignHandler}
                    showModal={this.state.assigning}
                    addCar={this.addCarHandler}
                    changed={(event) => this.inputChangedHandler(event)}
                    search={(event) => this.searchHandler(event)}
                    carCount={Object.keys(this.state.cars).length}
                    editCar={this.state.newCar}
                    editing={this.state.editing}/>
                <Cars 
                    cars={this.state.cars} 
                    clicked={this.carClickedHandler}
                    showModal={this.state.viewing}
                    viewedCar={this.state.viewingCar}
                    checkout={this.checkoutHandler}
                    edit={this.editHandler}/>
            </Aux>
        );
    }
}

export default VehicleManager;