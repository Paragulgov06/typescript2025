"use strict";
class Logger {
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        console.log(`${new Date().toISOString()}: ${message}`);
    }
}
class Users {
    constructor(name) {
        this.logger = Logger.getInstance();
        this.name = name;
        this.logger.log(`Een nieuwe gebruiker met de naam ${this.name} is aangemaakt.`);
    }
    setName(newName) {
        const oldName = this.name;
        this.name = newName;
        this.logger.log(`De gebruikersnaam is veranderd van ${oldName} naar ${this.name}.`);
    }
}
const users1 = new Users("John Doe");
users1.setName("Jane Doe");
