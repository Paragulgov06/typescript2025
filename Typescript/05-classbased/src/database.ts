class Database {

    // Voeg de nodige statische en instantievariabelen toe
    private static instance: Database;
    // private static readonly instance: Database; Hierdoor hoef je if (!Database.instance) 
    // niet te controleren, en kan getInstance() eenvoudiger worden:
    private data: string[] = [];
    // Implementeer de private constructor
    private constructor() { }


    // Implementeer de statische getInstance methode
    // Hierdoor hoef je if (!Database.instance) niet te controleren, 
    // en kan getInstance() eenvoudiger worden:
    // static getInstance(): Database {
    //     return Database.instance;
    // }
    static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    addData(data: string) {
        this.data.push(data);
    }
    removeData(data: string) {
        this.data = this.data.filter(item => item !== data);
    }
    fetchData(): string[] {
        return this.data;

    }
}
// Testen
const instance = Database.getInstance();
const instance3 = Database.getInstance();
// Hier controleren we of beide "instanties" dezelfde zijn
console.log(instance === instance3);  // Outputs: true
instance.addData("Data 1");
instance.addData("Data 2");
console.log(instance3.fetchData());  // Outputs: ["Data 1", "Data 2"]
instance3.removeData("Data 1");
console.log(instance.fetchData());  // Outputs: ["Data 2"]
