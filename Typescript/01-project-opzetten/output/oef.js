"use strict";
const leeftijdStudent = 28;
const achternaam = 'Paragulgov';
const isStudent = true;
console.log(`De leeftijd van ${achternaam} is ${leeftijdStudent}. Is ingeschreven als student: ${isStudent}`);
const dagenVanDeWeek = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
const vandaag = new Date().getDay();
console.log(`Vandaag is het ${dagenVanDeWeek[vandaag]}`);
const persoonInfo = [28, 'Paragulgov'];
console.log(`De leeftijd van ${persoonInfo[1]} is ${persoonInfo[0]}`);
var Windrichting;
(function (Windrichting) {
    Windrichting[Windrichting["Noord"] = 0] = "Noord";
    Windrichting[Windrichting["Oost"] = 1] = "Oost";
    Windrichting[Windrichting["Zuid"] = 2] = "Zuid";
    Windrichting[Windrichting["West"] = 3] = "West";
})(Windrichting || (Windrichting = {}));
const huidigeWindrichting = Windrichting.Noord;
console.log(`De huidige windrichting is ${Windrichting[huidigeWindrichting]}`);
var Seasons;
(function (Seasons) {
    Seasons[Seasons["Winter"] = 0] = "Winter";
    Seasons[Seasons["Lente"] = 1] = "Lente";
    Seasons[Seasons["Zomer"] = 2] = "Zomer";
    Seasons[Seasons["Herfst"] = 3] = "Herfst";
})(Seasons || (Seasons = {}));
const huidigeSeizoen = Seasons.Zomer;
console.log(`Het huidige seizoen is ${Seasons[huidigeSeizoen]}`);
var Planeten;
(function (Planeten) {
    Planeten["Mercury"] = "Small and close to the Sun";
    Planeten["Venus"] = "Similar in size to Earth, but very hot";
    Planeten["Earth"] = "Our home planet";
    Planeten["Mars"] = "The red planet";
    Planeten["Jupiter"] = "The largest planet";
    Planeten["Saturn"] = "Known for its rings";
    Planeten["Uranus"] = "An ice giant";
    Planeten["Neptune"] = "A distant blue world";
})(Planeten || (Planeten = {}));
const favoritePlanetInfo = Planeten.Earth;
console.log(`Mijn favoriete planeet is Earth "${favoritePlanetInfo}"`);
console.log(`Mijn favoriete planeet is "${Planeten.Mars}"`);
let mijnData = "Hello, world!";
mijnData = 42;
console.log(`Mijn data: ${mijnData}`);
let externeInput;
externeInput = "Lil Dick Randi";
console.log(`Externe input is: ${externeInput}`);
// functies 
function begroet(naam) {
    return `Hallo, ${naam}!`;
}
function logMessage(message) {
    console.log(message);
}
logMessage('Hi');
function begroet2(naam, taal = "Nederlands") {
    return `Hallo, ${naam}! (${taal})`;
}
//# sourceMappingURL=oef.js.map