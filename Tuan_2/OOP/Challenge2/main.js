class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} accelerate: ${this.speed}`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} brake: ${this.speed}`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

// Test data
const ford = new CarCl('Ford', 120);
ford.accelerate();
ford.brake();
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford.speed);