interface Shape1 {
    calculateArea1(w: number, h: number): number;
    calculatePerimeter1(w: number, h: number): number;
}
const rectangle1: Shape1 = {
    calculateArea1(w: number, h: number): number {
        return w * h; // Oppervlakte van de rechthoek
    },
    calculatePerimeter1(w: number, h: number): number {
        return 2 * (w + h); // Omtrek van de rechthoek
    }
};
const triangle1: Shape1 = {
    calculateArea1(w: number, h: number): number {
        return (1 / 2) * w * h; // Oppervlakte van de driehoek
    },
    calculatePerimeter1(w: number, h: number): number {
        return 5 + 8 + Math.sqrt(w ** 2 + h ** 2); // Omtrek van de driehoek
    },
}
console.log("Rechthoek oppervlakte:", rectangle1.calculateArea1(10, 20));
console.log("Rechthoek omtrek:", rectangle1.calculatePerimeter1(10, 20));
console.log("Driehoek oppervlakte:", triangle1.calculateArea1(5, 8));
console.log("Driehoek omtrek:", triangle1.calculatePerimeter1(5, 8));
