console.log("Hello World!");
const member: boolean = true;
const getallen: number[] = [1, 2, 3];
const namen: string[] = ["Anna", "Bob", "Charlie"];

// any
let data: any;
data = 42;           // toegestaan
data = "Hello";      // toegestaan
data = [1, 2, 3];    // toegestaan
// data.myMethod();     // Geen typefout, ook al bestaat deze methode mogelijk niet.

//  unknown
let dataUnknown: unknown;
dataUnknown = 42;           // toegestaan
dataUnknown = "Hello";      // toegestaan
dataUnknown = [1, 2, 3];    // toegestaan
// dataUnknown.myMethod(); // Typefout! TypeScript staat dit niet toe zonder een typecheck.
if (typeof data === "string") {
    console.log(data.toUpperCase()); // Nu toegestaan, want we hebben gecontroleerd dat data een string is.
}

// tuple
let point: [number, number];

point = [10, 20];   // toegestaan
// point = [10, 20, 30]; // Fout, te veel elementen
// point = ["10", 20];   // Fout, verkeerd type voor het eerste element
let complexTuple: [number, string, boolean] = [1, "one", true];

// enum
enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

const today: Days = Days.Friday;
console.log(today);  // Outputs: 4 (omdat Friday het vijfde item is, beginnend vanaf 0)
enum Colors {
    Red = "#FF0000",
    Green = "#00FF00",
    Blue = "#0000FF"
}

const favoriteColor: Colors = Colors.Green;
console.log(favoriteColor);  // Outputs: "#00FF00"

// function
const calculate = (num1: number, num2: number, tipo?: string): number => {
    return tipo === "subtract" ? num1 - num2 : num1 + num2;
}
console.log(calculate(10, 5));
console.log(calculate(20, 15, "subtract"));

const introduce = (naam: string, leeftijd: number = 30): string =>
    `Hallo, ik ben ${naam} en ik ben ${leeftijd} jaar oud.`;

console.log(introduce("John Doe"));
console.log(introduce("Randi Warrandi", 40));

const user: { name: string, age: number, describe(): string } =
{
    name: "Charlie",
    age: 35,
    describe() {
        return `Hello, my name is ${this.name} and i am ${this.age} years old.`;
    }
}
console.log(user.describe());

// object literal
// const person = {
//     name: "Alice",
//     startTimer: function () {
//         setInterval(() => {console.log(`Hallo, mijn naam is ${this.name}`); }, 1000);
//     },
// };
// person.startTimer();

