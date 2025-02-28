const leeftijdStudent: number = 28;
const achternaam: string = 'Paragulgov';
const isStudent: boolean = true;

console.log(`De leeftijd van ${achternaam} is ${leeftijdStudent}. Is ingeschreven als student: ${isStudent}`);

const dagenVanDeWeek: string[] = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
const vandaag = new Date().getDay();
console.log(`Vandaag is het ${dagenVanDeWeek[vandaag]}`);

const persoonInfo: [number, string] = [28, 'Paragulgov'];

console.log(`De leeftijd van ${persoonInfo[1]} is ${persoonInfo[0]}`);

enum Windrichting {
    Noord,
    Oost,
    Zuid,
    West
}
const huidigeWindrichting: Windrichting = Windrichting.Noord;
console.log(`De huidige windrichting is ${Windrichting[huidigeWindrichting]}`);

enum Seasons {
    Winter,
    Lente,
    Zomer,
    Herfst
}
const huidigeSeizoen: Seasons = Seasons.Zomer;

console.log(`Het huidige seizoen is ${Seasons[huidigeSeizoen]}`);

enum Planeten {
    Mercury = "Small and close to the Sun",
    Venus = "Similar in size to Earth, but very hot",
    Earth = "Our home planet",
    Mars = "The red planet",
    Jupiter = "The largest planet",
    Saturn = "Known for its rings",
    Uranus = "An ice giant",
    Neptune = "A distant blue world"
}
const favoritePlanetInfo: Planeten = Planeten.Earth;
console.log(`Mijn favoriete planeet is Earth "${favoritePlanetInfo}"`);
console.log(`Mijn favoriete planeet is "${Planeten.Mars}"`);

let mijnData: any = "Hello, world!";
mijnData = 42;
console.log(`Mijn data: ${mijnData}`);
let externeInput: unknown;
externeInput = "Lil Dick Randi";
console.log(`Externe input is: ${externeInput}`);

// functies 
function begroet(naam: string): string { // geeft string return
    return `Hallo, ${naam}!`;
}
function logMessage(message: string): void { // void geeft geen return
    console.log(message);
}
logMessage('Hi');
function begroet2(naam: string, taal: string = "Nederlands"): string {
    return `Hallo, ${naam}! (${taal})`;
}

