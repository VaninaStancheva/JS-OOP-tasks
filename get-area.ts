interface Shape {
    getArea: Function
}

class Circle implements Shape {
    private radius;

    constructor (radius: number ) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius
    }
}

class Rectangle implements Shape {
    private width: number;
    private height: number;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height
    }
}

class Triangle implements Shape {
    private base: number;
    private height: number;

    constructor (base, height) {
        this.base = base;
        this.height = height;
    }

    getArea() {
        return 0.5 * this.base * this.height
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(2, 3);

console.log(circle.getArea());
console.log(rectangle.getArea());
console.log(triangle.getArea());