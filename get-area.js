var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var Triangle = /** @class */ (function () {
    function Triangle(base, height) {
        this.base = base;
        this.height = height;
    }
    Triangle.prototype.getArea = function () {
        return 0.5 * this.base * this.height;
    };
    return Triangle;
}());
var circle = new Circle(5);
var rectangle = new Rectangle(4, 6);
var triangle = new Triangle(2, 3);
console.log(circle.getArea());
console.log(rectangle.getArea());
console.log(triangle.getArea());
