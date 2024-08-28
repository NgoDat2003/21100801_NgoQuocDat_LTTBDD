function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} tăng tốc: ${this.speed}`);
}

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} phanh: ${this.speed}`);
}

function EV(make, speed, battery) {
    Car.call(this, make, speed);
    this.battery = battery;
}

EV.prototype.chargeBattery = function(chargeTo) {
    this.battery = chargeTo;
}
EV.prototype.accelerate = function() {
    this.speed += 20;
    this.battery--;
    console.log(`${this.make} đang chạy với tốc độ ${this.speed} km/h, với mức độ sạc ${this.battery}%`);
}
const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.chargeBattery(90);
console.log(tesla);