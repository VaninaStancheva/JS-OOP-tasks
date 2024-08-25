class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return (`Hello, I am ${this.name} and I am ${this.age} years old!`)
    }
}

class Student extends Person {
    constructor (name, age, grade) {
        super (name, age);
        this.grade = grade;
    }
    greet() {
        return (`${super.greet()} My grade is ${this.grade}.` );
    }

    callBoth() {
        console.log(super.greet());
        console.log(this.greet())
    }
}

const p = new Person('Vanina', '16');
const s = new Student('Ana', '17', '5');

console.log(p.greet());
console.log(s.greet());
s.callBoth()
