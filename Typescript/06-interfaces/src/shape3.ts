interface Shape3 {
    calculateArea(): number;
    calculatePerimeter(): number;
}
class Circle implements Shape3 {
    constructor(private radius: number) { }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}
class Triangle2 implements Shape3 {
    constructor(private w: number, private h: number, private side1: number, private side2: number, private side3: number) { }
    calculateArea(): number {
        return 0.5 * this.w * this.h
    }
    calculatePerimeter(): number {
        return this.side1 + this.side2 + this.side3;
    }
}
class Rectangle implements Shape3 {
    constructor(private w: number, private h: number) { }
    calculateArea(): number {
        return this.w * this.h;
    }
    calculatePerimeter(): number {
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