class GameCharacter {
    #hero;
    #ability;
    #health;
    #state;
    constructor(hero, ability, health, state) {
        this.#hero = hero;
        this.#ability = ability;
        this.#health = health;
        this.#state = state;
    }

    get hero () {
        return this.#hero;
    }

    get ability () {
        return this.#ability;
    }

    get health () {
        return this.#health;
    }

    get state () {
        return this.#state;
    }
}

class Warrior extends GameCharacter {
    canFight () {
        this.state --;
        return console.log(`The ${this.hero} can fight and hits you!`);
    }
}