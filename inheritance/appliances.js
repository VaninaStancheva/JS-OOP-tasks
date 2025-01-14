/**
 * Represents a generic appliance with basic functionality.
 */
class Appliance {
    /**
     * Initialize the Appliance instance with brand, model, power state, energy rating, and warranty period.
     * @param {string} brand - The brand of the appliance.
     * @param {string} model - The model of the appliance.
     * @param {boolean} power - The initial power state of the appliance.
     * @param {string} energyRating - The energy rating of the appliance.
     * @param {number} warrantyPeriod - The warranty period in years.
     */
    constructor(brand, model, power, energyRating, warrantyPeriod) {
        this.brand = brand; // Brand of the appliance.
        this.model = model; // Model of the appliance.
        this.power = false; // Power state of the appliance, default is off.
        this.energyRating = energyRating; // Energy efficiency rating.
        this.warrantyPeriod = warrantyPeriod; // Warranty period in years.
    }
    /**
     * Turn on the appliance if it is currently off.
     * @returns {string} A message indicating the appliance's power state.
     */
    turnOn () {
        if (this.power === false) {
            this.power = true
            return ('The appliance is turned on!');
        } else {
           return ('The appliance is working! Do you want to turn it off');
        }
    }
    /**
     * Turn off the appliance if it is currently on.
     * @returns {string} A message indicating the appliance's power state.
     */
    turnOff () {
        if (this.power === true) {
            return ('The appliance is turned off!');
        }
    }
    /**
     * Get the details of the appliance as an array of values.
     * @param {Object} object - The appliance object to retrieve details from.
     * @returns {Array} An array of the object's property values.
     */
    getDetails (object) {
        return Object.values(object);
    }

}

/**
 * Represents a washing machine, extending the functionality of a generic appliance.
 */
class WashingMachine extends Appliance {
    /**
     * Initialize the WashingMachine instance with additional properties specific to washing machines.
     * @param {string} brand - The brand of the washing machine.
     * @param {string} model - The model of the washing machine.
     * @param {boolean} power - The initial power state of the washing machine.
     * @param {string} energyRating - The energy rating of the washing machine.
     * @param {number} warrantyPeriod - The warranty period in years.
     * @param {number} capacity - The capacity of the washing machine in kilograms.
     * @param {Array<string>} washModes - The available washing modes.
     * @param {number} waterConsumption - The water consumption per wash cycle in liters.
     */
    constructor(brand, model, power, energyRating, warrantyPeriod, capacity, washModes = [], waterConsumption) {
        super(brand, model, power, energyRating, warrantyPeriod);
        this.capacity = capacity; // Capacity of the washing machine in kilograms.
        this.washModes = washModes; // Array of washing modes.
        this.waterConsumption = waterConsumption; // Water consumption per wash cycle in liters.
    }

    /**
     * Start the washing machine in a specified mode if it is powered on.
     * @param {string} mode - The washing mode to start.
     * @returns {string} A message indicating the washing machine's state or mode.
     */
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