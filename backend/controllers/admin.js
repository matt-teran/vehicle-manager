const Car = require('../models/car');

exports.postAddCar = (req, res, next) => {
    const car = new Car(req.body.ticket);
    car.save();
    res.json({success: true});
}