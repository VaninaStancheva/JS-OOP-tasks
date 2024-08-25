class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    greet(person) {
        return (`Hello, I am ${this.name} and I am ${this.age} years old!`)
    }
}

class Student extends Person {
    constructor (name, age, grade) {
        super (name, age);
        this.grade = grade;
    }
    greetGrade(student) {
        return (`${super.greet()} My grade is ${this.grade}.` );
    }
}

const p = new Person('Vanina', '16');
const s = new Student('Ana', '17', '5');

console.log(p.greet());
console.log(s.greetGrade());
