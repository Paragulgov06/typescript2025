"use strict";
console.log("Hello World!");
const member = true;
const getallen = [1, 2, 3];
const namen = ["Anna", "Bob", "Charlie"];
// any
let data;
data = 42; // toegestaan
data = "Hello"; // toegestaan
data = [1, 2, 3]; // toegestaan
// data.myMethod();     // Geen typefout, ook al bestaat deze methode mogelijk niet.
//  unknown
let dataUnknown;
dataUnknown = 42; // toegestaan
dataUnknown = "Hello"; // toegestaan
dataUnknown = [1, 2, 3]; // toegestaan
// dataUnknown.myMethod(); // Typefout! TypeScript staat dit niet toe zonder een typecheck.
if (typeof data === "string") {
    console.log(data.toUpperCase()); // Nu toegestaan, want we hebben gecontroleerd dat data een string is.
}
// tuple
let point;
point = [10, 20]; // toegestaan
// point = [10, 20, 30]; // Fout, te veel elementen
// point = ["10", 20];   // Fout, verkeerd type voor het eerste element
let complexTuple = [1, "one", true];
// enum
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Saturday"] = 5] = "Saturday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days || (Days = {}));
const today = Days.Friday;
console.log(today); // Outputs: 4 (omdat Friday het vijfde item is, beginnend vanaf 0)
var Colors;
(function (Colors) {
    Colors["Red"] = "#FF0000";
    Colors["Green"] = "#00FF00";
    Colors["Blue"] = "#0000FF";
})(Colors || (Colors = {}));
const favoriteColor = Colors.Green;
console.log(favoriteColor); // Outputs: "#00FF00"
// function
const calculate = (num1, num2, tipo) => {
    return tipo === "subtract" ? num1 - num2 : num1 + num2;
};
console.log(calculate(10, 5));
console.log(calculate(20, 15, "subtract"));
const introduce = (naam, leeftijd = 30) => `Hallo, ik ben ${naam} en ik ben ${leeftijd} jaar oud.`;
console.log(introduce("John Doe"));
console.log(introduce("Randi Warrandi", 40));
const user = {
    name: "Charlie",
    age: 35,
    describe() {
        return `Hello, my name is ${this.name} and i am ${this.age} years old.`;
    }
};
console.log(user.describe());
// object literal
// const person = {
//     name: "Alice",
//     startTimer: function () {
//         setInterval(() => {console.log(`Hallo, mijn naam is ${this.name}`); }, 1000);
//     },
// };
// person.startTimer();
//# sourceMappingURL=index.js.map