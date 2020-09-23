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
    constructor(ticket){
        this.ticket = ticket;
    }
    save(){
        getCarsFromFile ((cars) => {
            cars.push(this);
            fs.writeFile(p, JSON.stringify(cars), (err)=>{
                // console.log(err);
            })
        })
    }
    static fetchAll(cb){
        getCarsFromFile(cb)
    }
}