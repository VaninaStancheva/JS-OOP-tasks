class Animals {
    constructor(animal) {
        this.animal = animal;
    }

    makeNoise (noise) {
        return (`The ${this.animal} is making ${noise} noise.`);
    }
}

class Mammal extends Animals {
    constructor(animal, isFish, isPredator) {
        super(animal);
        this.isFish = isFish
        this.isPredator = isPredator;
    }

    isMammalFish () {
        if (this.isFish === false) {
            return `${this.animal} can walk and run.`;
        } else {
            return `${this.animal} is a fish and can swim.`;
        }
    }

    isMammalPredator () {
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

class Bird extends Animals {
    constructor(animal, fly) {
        super(animal);
        this.fly = fly;
    }

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
