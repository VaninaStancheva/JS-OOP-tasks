/**
 * Represents a generic animal with basic behavior.
 */
class Animals {
    /**
     * Initialize the Animals instance with a specific type of animal.
     * @param {string} animal - The type of animal.
     */
    constructor(animal) {
        this.animal = animal; // Type of the animal.
    }
    /**
     * Describe the noise made by the animal.
     * @param {string} noise - The noise made by the animal.
     * @returns {string} A message describing the noise.
     */
    makeNoise (noise) {
        return (`The ${this.animal} is making ${noise} noise.`);
    }
}
/**
 * Represents a mammal, extending the basic animal class with additional properties.
 */
class Mammal extends Animals {
    /**
     * Initialize the Mammal instance with additional properties specific to mammals.
     * @param {string} animal - The type of animal.
     * @param {boolean} isFish - Indicates if the mammal is a fish.
     * @param {boolean} isPredator - Indicates if the mammal is a predator.
     */
    constructor(animal, isFish, isPredator) {
        super(animal);
        this.isFish = isFish // Indicates if the mammal is a fish.
        this.isPredator = isPredator; // Indicates if the mammal is a predator.
    }
    /**
     * Determine if the mammal is a fish and describe its movement.
     * @returns {string} A message describing the mammal's movement.
     */
    isMammalFish () {
        if (this.isFish === false) {
            return `${this.animal} can walk and run.`;
        } else {
            return `${this.animal} is a fish and can swim.`;
        }
    }
    /**
     * Determine the mammal's diet based on its type and predatory status.
     * @returns {string} A message describing the mammal's diet.
     */    isMammalPredator () {
        if (this.isPredator === false) {
            if (this.isFish === false) {
                return `${this.animal} eats plants.`;
            } else {
                return `${this.animal} eats seaweed and plankton.`;
            }
        } else {
            return `${this.animal} eats other animals.`;
        }
    }
}
/**
 * Represents a bird, extending the basic animal class with additional properties.
 */
class Bird extends Animals {
    /**
     * Initialize the Bird instance with additional properties specific to birds.
     * @param {string} animal - The type of animal.
     * @param {boolean} fly - Indicates if the bird can fly.
     */
    constructor(animal, fly) {
        super(animal);
        this.fly = fly; //Indicates if the bird can fly.
    }
    /**
     * Determine if the bird can fly.
     * @returns {string} A message describing the bird's movement.
     */
    canFly () {
        if (this.fly === true) {
            return `${this.animal} can fly.`;
        } else {
            return `${this.animal} cannot fly.`;
        }
    }
}

const lion = new Mammal('Lion', false, true);
console.log(lion.isMammalFish());
console.log(lion.isMammalPredator());
console.log(lion.makeNoise('roar'));

const dolphin = new Mammal('Dolphin', true, true);
console.log(dolphin.isMammalFish());
console.log(dolphin.isMammalPredator());
console.log(dolphin.makeNoise('whistles and clicks'));

const bird = new Bird('Birds', true);
console.log(bird.canFly());

const penguin = new Bird('Penguin', false);
console.log(penguin.canFly());
