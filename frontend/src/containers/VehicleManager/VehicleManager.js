import React, { Component } from "react";
import axios from "../../axios-instance";

import Aux from "../../hoc/Aux/Aux";

import Toolbar from "../../components/Toolbar/Toolbar";
import Cars from "../../components/Cars/Cars";

class VehicleManager extends Component {
  state = {
    cars: {},
    newCar: { display: true },
    assigning: false,
    openMore: false,
    viewing: false,
    viewingCar: null,
    editing: false,
  };
  componentDidMount() {
    this.getCarsHandler();
  }
  assignHandler = () => {
    this.setState({
      newCar: { display: true },
      assigning: !this.state.assigning,
      openMore: false,
      editing: false,
    });
  };
  addCarHandler = (event) => {
    event.preventDefault();
    let updatedNewCar = { ...this.state.newCar };
    if (!updatedNewCar.time) updatedNewCar.time = new Date();
    let updatedCars = { ...this.state.cars };
    updatedCars[this.state.newCar.ticket] = updatedNewCar;
    axios
      .post("/add-car", updatedNewCar)
      .then((res) => {
        console.log("car logged");
        this.getCarsHandler();
      })
      .catch((err) => {
        console.log(err);
      });
    this.assignHandler();
    // this.setState({cars: updatedCars})
  };
  getCarsHandler = () => {
    axios
      .get("/get-cars")
      .then((res) => {
        let fetchedCars = {};
        res.data.forEach((car) => {
          fetchedCars[car.ticket] = { ...car };
          fetchedCars[car.ticket].display = true;
          fetchedCars[car.ticket].time = new Date(car.time);
        });
        this.setState({ cars: fetchedCars });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  inputChangedHandler = (event) => {
    let updatedNewCar = { ...this.state.newCar };
    updatedNewCar[event.target.id] = event.target.value;
    this.setState({ newCar: updatedNewCar });
  };
  carClickedHandler = (ticket) => {
    let updatedCars = { ...this.state.cars };
    for (let car in updatedCars) {
      updatedCars[car].focus = car === ticket ? true : false;
    }
    this.setState({ cars: updatedCars, viewing: true, viewingCar: ticket });
  };
  checkoutHandler = () => {
    let updatedCars = { ...this.state.cars };
    delete updatedCars[this.state.viewingCar];
    this.setState({ cars: updatedCars, viewing: false, viewingCar: null });
  };
  editHandler = () => {
    this.setState({
      newCar: this.state.cars[this.state.viewingCar],
      assigning: !this.state.assigning,
      editing: true,
    });
  };
  moreHandler = () => {
    this.setState({ openMore: true });
  };
  closeModalHandler = () => {
    this.setState({ assigning: false, openMore: false });
  };

  searchHandler = (event) => {
    let updatedCars = { ...this.state.cars };
    for (let car in updatedCars) {
        updatedCars[car].display = false;
        ['ticket', 'phone', 'plate', 'make', 'color'].forEach(x=>{
            if (updatedCars[car][x] === undefined){ return }
            if (updatedCars[car][x].indexOf(event.target.value) !== -1){
                updatedCars[car].display = true;
            }
        })
    }
    this.setState({ cars: updatedCars });
  };

  render() {
    return (
      <Aux>
        <Toolbar
          closeModal={this.closeModalHandler}
          assign={this.assignHandler}
          assigning={this.state.assigning}
          more={this.moreHandler}
          openMore={this.state.openMore}
          showModal={this.state.assigning}
          addCar={this.addCarHandler}
          changed={(event) => this.inputChangedHandler(event)}
          search={(event) => this.searchHandler(event)}
          carCount={Object.keys(this.state.cars).length}
          editCar={this.state.newCar}
          editing={this.state.editing}
        />
        <Cars
          cars={this.state.cars}
          clicked={this.carClickedHandler}
          showModal={this.state.viewing}
          viewedCar={this.state.viewingCar}
          checkout={this.checkoutHandler}
          edit={this.editHandler}
        />
      </Aux>
    );
  }
}

export default VehicleManager;

//"2020-09-23T09:56:36.812Z"
