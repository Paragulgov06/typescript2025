"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Triangle2 {
    constructor(w, h, side1, side2, side3) {
        this.w = w;
        this.h = h;
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    calculateArea() {
        return 0.5 * this.w * this.h;
    }
    calculatePerimeter() {
        return this.side1 + this.side2 + this.side3;
    }
}
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
    calculateArea() {
        return this.w * this.h;
    }
    calculatePerimeter() {
        return 2 * (this.w + this.h);
    }
}
const myCircle = new Circle(5); // Een cirkel met straal 5
console.log("Cirkel - Oppervlakte:", myCircle.calculateArea()); // Cirkel - Oppervlakte: 78.53981633974483
console.log("Cirkel - Omtrek:", myCircle.calculatePerimeter()); // Cirkel - Omtrek: 31.41592653589793
const myTriangle = new Triangle2(4, 5, 3, 4, 5); // Een driehoek met basis 4, hoogte 5 en zijden 3, 4 en 5
console.log("Driehoek - Oppervlakte:", myTriangle.calculateArea()); // Driehoek - Oppervlakte: 10
console.log("Driehoek - Omtrek:", myTriangle.calculatePerimeter()); // Driehoek - Omtrek: 12
const myRectangle = new Rectangle(6, 8); // Een rechthoek met breedte 6 en hoogte 8
console.log("Rechthoek - Oppervlakte:", myRectangle.calculateArea()); // Rechthoek - Oppervlakte: 48
console.log("Rechthoek - Omtrek:", myRectangle.calculatePerimeter()); // Rechthoek - Omtrek: 28
