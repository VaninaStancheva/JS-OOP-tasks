// The Vehicle class represents a generic vehicle.
class Vehicle {
    // Private properties for encapsulating speed, fuel, model.
    #speed;
    #fuel;
    #model;
    /**
     * Initialize the Vehicle instance with speed, fuel and model values.
     * @param {number} speed - The initial speed of the vehicle.
     * @param {number} fuel - The initial fuel level of the vehicle.
     * @param {string} model - The initial model of the vehicle.
     */
    constructor(speed, fuel, model) {
        this.#speed = speed; // Assign the speed value to the private #speed property.
        this.#fuel = fuel;   // Assign the fuel value to the private #fuel property.
        this.#model = model; // Assign the model value to the private #model property.
    }
    /**
     * Get the current speed of the vehicle.
     * @returns {number} The current speed of the vehicle in km/h.
     */
    get speed () {
        return this.#speed;
    }
    /**
     * Set a new speed for the vehicle. Throws an error if the speed is negative.
     * @param {number} value - The new speed value to set in km/h.
     */
    set speed (value) {
        if (value < 0) {
            throw new Error('Invalid speed!'); // Throws an error if the value is negative.
        }
        this.#speed = value;
    }
    /**
     * Get the current fuel level of the vehicle.
     * @returns {number} The current fuel level of the vehicle in litters.
     */
    get fuel () {
        return this.#fuel;
    }
    /**
     * Set a new fuel level for the vehicle.
     * @param {number} value - The new fuel value to set in litters.
     */
    set fuel (value) {
        this.#fuel = value;
    }
    /**
     * Get the current model for the vehicle.
     * @param {string} - The model of the vehicle. Read-only property.
     */
    get model () {
        return this.#model;
    }
    /**
     * Calculate the fuel consumption percentage for a given distance in km.
     * @param {number} distance - The distance traveled in km.
     * @returns {number} The fuel consumption percentage based on the distance.
     */
    fuelConsumption (distance) {
        return (this.#fuel / distance) * 100;
    }
    /**
     * Calculate the time required to travel a given distance based on the speed.
     * @param {number} distance - The distance to travel in km.
     * @returns {number} The time (in hours) required to travel the distance.
     */
    time (distance) {
        return distance / this.#speed;
    }
    /**
     * Calculate the distance that can be traveled in a given time based on the speed.
     * @param {number} time - The time available for travel in hours.
     * @returns {number} The distance (in km) that can be traveled in the given time.
     */
    distance (time) {
        return time * this.#speed;
    }
}

const car = new Vehicle(20,50, 'mercedes');
console.log(car.speed);
console.log(car.fuel);
console.log(car.model);
console.log(car.fuelConsumption(10));
console.log(car.time(300));
console.log(car.distance(3));

car.speed = 100;
car.fuel = 50;
console.log(car.speed);
console.log(car.fuel);
console.log(car.fuelConsumption(10));
console.log(car.time(300));
console.log(car.distance(3));

const motorcycle = new Vehicle(150,80, 'bmw');
console.log(motorcycle.speed);
console.log(motorcycle.fuel);
console.log(motorcycle.model);
console.log(motorcycle.fuelConsumption(200));
console.log(motorcycle.time(150));
console.log(motorcycle.distance(2));

motorcycle.speed = 200;
motorcycle.fuel = 50;
console.log(motorcycle.fuel);
console.log(motorcycle.speed);
console.log(motorcycle.fuelConsumption(100));
console.log(motorcycle.time(200));
console.log(motorcycle.distance(5));

motorcycle.speed = -10;
console.log(motorcycle.speed);



