interface Dish {
    name: string;
    price: number;
    quantityOrdered: number;
    discountPercentage?: number;
    quantityForDiscount?: number;
}
class MainCourse implements Dish {
    constructor(
        public name: string,
        public price: number,
        public quantityOrdered: number,
        public discountPercentage?: number,
        public quantityForDiscount?: number
    ) { }
}
class Dessert implements Dish {
    constructor(
        public name: string,
        public price: number,
        public quantityOrdered: number,
        public discountPercentage?: number,
        public quantityForDiscount?: number
    ) { }
}
function calculateTotalPrice(dishes: Dish[]): number {
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

const dishes: Dish[] = [steak, chickenCurry, chocolateCake, bananaMilkshake];


const totalPrice = calculateTotalPrice(dishes);


console.log(`Total price: ${totalPrice.toFixed(2)}€`);
