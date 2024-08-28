class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} tăng tốc: ${this.speed}`);
        return this;
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} phanh: ${this.speed}`);
        return this;
    }
}

class EVCl extends CarCl {
    charge; // thuộc tính riêng tư

    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge;
    }

    chargeBattery(chargeTo) {
        this.charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.charge--;
        console.log(`${this.make} đang chạy với tốc độ ${this.speed} km/h, với mức độ sạc ${this.charge}%`);
        return this;
    }
}

// Dữ liệu thử nghiệm
const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate();