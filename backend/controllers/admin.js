const Car = require('../models/car');

exports.postAddCar = (req, res, next) => {
    const ticket = req.body.ticket;
    const phone = req.body.phone;
    const plate = req.body.plate;
    const make = req.body.make;
    const color = req.body.color;
    const time = req.body.time;
    const car = new Car(ticket, phone, plate, make, color, time);
    car.save();
    res.json({success: true});
}

exports.getCars = (req, res, next) => {
    Car.fetchAll((data) => {res.json(data)});
}