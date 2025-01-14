class Appliance {
    constructor(brand, model, power, energyRating, warrantyPeriod) {
        this.brand = brand;
        this.model = model;
        this.power = false;
        this.energyRating = energyRating;
        this.warrantyPeriod = warrantyPeriod;
    }

    turnOn () {
        if (this.power === false) {
            this.power = true
            return ('The appliance is turned on!');
        } else {
           return ('The appliance is working! Do you want to turn it off');
        }
    }

    turnOff () {
        if (this.power === true) {
            return ('The appliance is turned off!');
        }
    }

    getDetails (object) {
        return Object.values(object);
    }

}

class WashingMachine extends Appliance {
    constructor(brand, model, power, energyRating, warrantyPeriod, capacity, washModes = [], waterConsumption) {
        super(brand, model, power, energyRating, warrantyPeriod);
        this.capacity = capacity;
        this.washModes = washModes;
        this.waterConsumption = waterConsumption;
    }

    startWashing(mode) {
        if (this.power === true) {
            const indexMode = this.washModes.indexOf(mode);
            return (`Washing Machine is working on ${this.washModes[indexMode]} mode.` );
        } else {
            return ('You have to turn on the washing machine first!');
        }
    }
}

const washingMachine1 = new WashingMachine(
    'bosch', 'Series 8', false,'A+++', 5, 7, ['cotton', 'delicate', 'mix', 'black'], 5);
console.log(washingMachine1.getDetails(washingMachine1));
console.log(washingMachine1.startWashing('cotton'));
console.log(washingMachine1.turnOn());
console.log(washingMachine1.startWashing('cotton'));
console.log(washingMachine1.turnOff());