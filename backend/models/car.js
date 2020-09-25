const fs = require('fs');
const path = require('path')

const p = path.join(path.dirname(require.main.filename), 'data', 'cars.json');

const getCarsFromFile = (cb) => {
    let cars = [];
    fs.readFile(p, (err, fileContent)=>{
        if (err){
            return cb([]);
        };
        cb(JSON.parse(fileContent));
    });
};

module.exports = class Car {
    constructor(ticket, phone, plate, spot, make, color, time){
        this.ticket = ticket,
        this.phone = phone,
        this.plate = plate,
        this.spot = spot,
        this.make = make,
        this.color = color,
        this.time = time
    }
    save(){
        getCarsFromFile ((cars) => {
            let push = true;
            cars.forEach((car, i) => {
                if (car.ticket === this.ticket){
                    for (let detail in this){
                        if (detail !== 'time' && this[detail] !== undefined){
                            console.log(this[detail]);
                            cars[i][detail] = this[detail];
                        }
                    }
                    push = false;
                }
            })

            if (push) cars.push(this);
            fs.writeFile(p, JSON.stringify(cars), (err)=>{
                console.log(err);
            })
        })
    }
    static fetchAll(cb){
        getCarsFromFile(cb)
    }
}