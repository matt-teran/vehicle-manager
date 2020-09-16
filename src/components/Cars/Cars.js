import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import Car from '../Car/Car';
import CarModal from '../UI/CarModal/CarModal';
import CarSummary from '../UI/CarSummary/CarSummary';

import classes from './Cars.module.css';

const cars = (props) => {
    let loggedCars = [];
    for (let car in props.cars){
        loggedCars.push(<Car 
            key={car}
            display={props.cars[car].display} 
            ticket={car}
            phone={props.cars[car].phone}
            plate={props.cars[car].plate}
            make={props.cars[car].make}
            color={props.cars[car].color}
            time={props.cars[car].time}
            clicked={props.clicked}/>);
    }

    return (
        <Aux>
            <CarModal showModal={props.showModal}>

                <CarSummary 
                    viewedCar={ props.cars[props.viewedCar] }/>
            
            </CarModal>
            <div className={classes.Cars}>
                {loggedCars}
            </div>
        </Aux>
    )
}

export default cars;