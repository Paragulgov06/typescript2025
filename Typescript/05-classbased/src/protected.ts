class Vehicle {
    protected brand: string;
    constructor(brand: string) {
        this.brand = brand;
    }
    protected startEngine() {
        console.log(`${this.brand} engine started.`);
    }
}
class Car extends Vehicle {
    private model: string;
    constructor(brand: string, model: string) {
        super(brand);//constructor van bovenliggende klasse (Vehicle) wordt aangeroepen en brand wordt opgestuurd
        this.model = model;
    }
    public drive() {
        this.startEngine(); // Toegang tot de 'startEngine'-methode via overerving
        console.log(`Driving the ${this.brand} ${this.model}.`);
    }
}
const myCar = new Car("Toyota", "Camry");
myCar.drive();
//console.log(myCar.brand); // Fout: Eigenschap 'brand' is beschermd en niet toegankelijk van buiten de klasse
