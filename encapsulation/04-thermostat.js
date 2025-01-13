//A thermostat that restricts direct access to the temperature setting and provides methods to adjust it safely.
class Thermostat {
    // Private property to store the temperature.
    #temperature;
    /**
     * Initialize the Thermostat instance with a given temperature.
     * @param {number} temperature - The initial temperature setting in degrees.
     */
    constructor(temperature) {
        this.#temperature = temperature; // Assign the initial temperature to the private #temperature property.
    }
    /**
     * Get the current temperature of the thermostat.
     * @returns {number} The current temperature.
     */
    get temperature() {
        return this.#temperature;
    }
    /**
     * Set a new temperature for the thermostat if it is within the valid range (10-30).
     * @param {number} value - The new temperature to set.
     */
    set temperature (value) {
        if (value < 30 && value > 10) {
            this.#temperature = value; // Update the temperature if within range.
        } else {
            console.log('Invalid temperature!'); // Log an error if the temperature is out of range.
        }
    }
}

const temperature = new Thermostat(25);
console.log(temperature.temperature);
temperature.temperature = 28;
console.log(temperature.temperature);
temperature.temperature = 35;
console.log(temperature.temperature);
