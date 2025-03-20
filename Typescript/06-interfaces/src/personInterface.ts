interface PersonInterface {
    firstName: string;
    lastName: string;
    age: number;
}

const personA: PersonInterface = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};
const personB: PersonInterface = {
    firstName: "Alice",
    lastName: "Smith",
    age: 25,
};

function printPersonInfo(person: PersonInterface) {
    console.log(`Name: ${person.firstName} ${person.lastName}`);
    console.log(`Age: ${person.age} years old`);
}

printPersonInfo(personA);
printPersonInfo(personB);
