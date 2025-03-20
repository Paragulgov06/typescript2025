class Logger {
    private static instance: Logger;

    private constructor() { }

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(message: string) {
        console.log(`${new Date().toISOString()}: ${message}`);
    }
}

class Users {
    private logger: Logger = Logger.getInstance();
    private name: string;

    constructor(name: string) {
        this.name = name;
        this.logger.log(`Een nieuwe gebruiker met de naam ${this.name} is aangemaakt.`);
    }

    setName(newName: string) {
        const oldName = this.name;
        this.name = newName;
        this.logger.log(`De gebruikersnaam is veranderd van ${oldName} naar ${this.name}.`);
    }
}
const users1 = new Users("John Doe");
users1.setName("Jane Doe");
