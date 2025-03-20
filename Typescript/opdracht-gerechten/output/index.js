"use strict";
class MainCourse {
    constructor(name, price, quantityOrdered, discountPercentage, quantityForDiscount) {
        this.name = name;
        this.price = price;
        this.quantityOrdered = quantityOrdered;
        this.discountPercentage = discountPercentage;
        this.quantityForDiscount = quantityForDiscount;
    }
}
class Dessert {
    constructor(name, price, quantityOrdered, discountPercentage, quantityForDiscount) {
        this.name = name;
        this.price = price;
        this.quantityOrdered = quantityOrdered;
        this.discountPercentage = discountPercentage;
        this.quantityForDiscount = quantityForDiscount;
    }
}
function calculateTotalPrice(dishes) {
    return dishes.map(dish => {
        let pricePerUnit = dish.price;
        console.log(`${dish.name} - ${dish.price.toFixed(2)}€`);
        // Korting controleren
        if (dish.discountPercentage && dish.quantityForDiscount && dish.quantityOrdered >= dish.quantityForDiscount) {
            pricePerUnit *= (100 - dish.discountPercentage) / 100;
            console.log(`Discount of ${dish.discountPercentage}% applied on ${dish.name}`);
        }
        const totalDishPrice = pricePerUnit * dish.quantityOrdered;
        console.log(`${pricePerUnit.toFixed(2)}€ * ${dish.quantityOrdered} ordered = ${totalDishPrice.toFixed(2)}€`);
        console.log("---");
        return totalDishPrice;
    }).reduce((total, price) => total + price, 0);
}
const steak = new MainCourse("Steak", 18.99, 4, 10, 4);
const chickenCurry = new MainCourse("Chicken Curry", 12.99, 1);
const chocolateCake = new Dessert("Chocolate Cake", 6.99, 4, 15, 4);
const bananaMilkshake = new Dessert("Banana Milkshake", 4.99, 1);
const dishes = [steak, chickenCurry, chocolateCake, bananaMilkshake];
const totalPrice = calculateTotalPrice(dishes);
console.log(`Total price: ${totalPrice.toFixed(2)}€`);
