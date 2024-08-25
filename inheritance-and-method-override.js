class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    greet(person) {
        console.log(`Hello, I am ${this.name} and I am ${this.age} years old!`)
    }
}

class Student extends Person {
    constructor (name, age, grade) {
        super (name, age);
        this.grade = grade;
    }
    greet(student) {
        console.log(`Hello, I am ${this.name} and I am ${this.age} years old! My grade is ${this.grade}.` );
    }
}

const p = new Person('Vanina', '16');
const s = new Student('Ana', '17', '5');

p.greet();
s.greet();
