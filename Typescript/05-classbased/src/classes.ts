class Animal {
    // Eigenschappen
    name: string;

    // Constructor
    constructor(name: string) {
        this.name = name;
    }

    // Methode
    makeSound() {
        console.log(`${this.name} makes a sound`);
    }
}
const myAnimal = new Animal("Dog");
myAnimal.makeSound();
myAnimal.name = "MyDog";
console.log(myAnimal.name);




class Auto {
    merk: string;
    model: string;
    bouwjaar: number;

    constructor(merk: string, model: string, bouwjaar: number) {
        this.merk = merk;
        this.model = model;
        this.bouwjaar = bouwjaar;
    }
    get beschrijving() {
        return `${this.merk} ${this.model}`;
    }
    set jaar(value: number) {
        if (value > 2000) {
            this.bouwjaar = value;
        } else {
            console.log('Voer een jaar boven de 2000')
        }
    }
    toonDetails() {
        console.log(`${this.merk} ${this.model} (Bouwjaar: ${this.bouwjaar})`);
    }

}
const mijnAuto = new Auto("Toyota", "Corolla", 2020);
const jouwAuto = new Auto("Honda", "Civic", 2025);
mijnAuto.bouwjaar = 2021;
console.log(mijnAuto.bouwjaar);
mijnAuto.toonDetails();

class Dier {
    naam: string;
    constructor(naam: string) {
        this.naam = naam;
    }
    maakGeluid(): string {
        return `${this.naam} maakt een geluid.`;
    }
}
class Hond extends Dier {
    maakGeluid(): string {
        return `${this.naam} blaft!`;
    }
}
const mijnHond = new Hond("Rex");
console.log(mijnHond.maakGeluid()); // Output: "Rex blaft!"

class Animal1 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    get animalName(): string {
        return `De naam is: ${this.name}`;
    }
    set animalNameInstellen(value: string) {
        if (value.length > 0) {
            this.name = value;
        } else {
            console.log("Voer een geldige naam in.");
        }
    }

    makeSound() {
        console.log(`${this.name} maakt een geluid.`);
    }
}
