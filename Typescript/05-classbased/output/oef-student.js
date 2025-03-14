"use strict";
class Student {
    constructor(naam, studentNummer) {
        this._cijfers = [];
        this._naam = naam;
        this._studentNummer = studentNummer;
    }
    get getNaam() {
        return this._naam;
    }
    get getGemiddelde() {
        if (this._cijfers.length === 0) {
            return 0;
        }
        const totaal = this._cijfers.reduce((a, b) => a + b, 0);
        return parseFloat((totaal / this._cijfers.length).toFixed(2));
    }
    set setNaam(naam) {
        const nieuweNaam = naam.trim();
        if (nieuweNaam.length > 0) {
            this._naam = nieuweNaam;
        }
        else {
            console.log("Voer een geldige naam in.");
        }
    }
    voegCijferToe(cijfer) {
        if (cijfer >= 0 && cijfer <= 10) {
            this._cijfers.push(cijfer);
        }
        else {
            console.log("Voer een geldig cijfer in tussen 0 en 10.");
        }
    }
}
const student1 = new Student("Pieter", "S12345");
const student2 = new Student("Anna", "S54321");
const student3 = new Student("Sofie", "S54383");
student1.voegCijferToe(8);
student1.voegCijferToe(7.5);
student1.voegCijferToe(6);
student2.voegCijferToe(4);
student2.voegCijferToe(9);
student3.voegCijferToe(5.5);
student3.voegCijferToe(6.5);
console.log(`${student1.getNaam} zijn gemiddelde cijfer is: ${student1.getGemiddelde}`);
console.log(`${student2.getNaam} zijn gemiddelde cijfer is: ${student2.getGemiddelde}`);
console.log(`${student3.getNaam} zijn gemiddelde cijfer is: ${student3.getGemiddelde}`);
student1.setNaam = "Peter";
console.log(`De nieuwe naam van student1 is: ${student1.getNaam}`);
