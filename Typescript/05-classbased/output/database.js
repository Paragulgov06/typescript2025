"use strict";
class Database {
    // Implementeer de private constructor
    constructor() {
        this.data = [];
    }
    // Implementeer de statische getInstance methode
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
    addData(data) {
        this.data.push(data);
    }
    removeData(data) {
        this.data = this.data.filter(item => item !== data);
    }
    fetchData() {
        return this.data;
    }
}
// Testen
const instance = Database.getInstance();
const instance3 = Database.getInstance();
// Hier controleren we of beide "instanties" dezelfde zijn
console.log(instance === instance3); // Outputs: true
instance.addData("Data 1");
instance.addData("Data 2");
console.log(instance3.fetchData()); // Outputs: ["Data 1", "Data 2"]
instance3.removeData("Data 1");
console.log(instance.fetchData()); // Outputs: ["Data 2"]
