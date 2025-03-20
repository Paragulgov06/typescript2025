"use strict";
let nextId = 0;
let events = [];
function addEvent(title, date, description, attendees) {
    const newEvent = {
        id: nextId++,
        title,
        date,
        description,
        attendees,
    };
    events.push(newEvent);
    return newEvent;
}
function removeEvent(id) {
    const index = events.findIndex((event) => event.id === id);
    if (index === -1) {
        return false;
    }
    events.splice(index, 1);
    return true;
}
function findEventByTitle(title) {
    return events.find((event) => event.title.toLowerCase() === title.toLowerCase());
}
function searchEvents(keyword) {
    const lowerCaseKeyword = keyword.toLowerCase();
    return events.filter((event) => event.title.toLowerCase().includes(lowerCaseKeyword) ||
        event.description.toLowerCase().includes(lowerCaseKeyword));
}
// Voeg enkele evenementen toe
addEvent("TypeScript Workshop", "2034-03-15", "Een diepgaande workshop over TypeScript.", 100);
addEvent("JavaScript Conferentie", "2034-04-20", "Internationale conferentie over JavaScript.", 200);
// Zoek naar een evenement met de titel 'Workshop'
const workshopEvent = findEventByTitle("Workshop");
if (workshopEvent) {
    console.log("Evenement met titel 'Workshop':", workshopEvent);
}
else {
    console.log("Geen evenement gevonden met titel 'Workshop'");
}
// Zoek naar 'workshop' en log enkel de titel van de gevonden evenementen
const workshopResults = searchEvents("workshop");
console.log("\nZoekresultaten voor 'workshop':");
workshopResults.forEach(event => console.log(event.title));
// Zoek naar 'TypeScript' en log enkel de titel van de gevonden evenementen
const tsResults = searchEvents("TypeScript");
console.log("\nZoekresultaten voor 'TypeScript':");
tsResults.forEach(event => console.log(event.title));
// Zoek naar 'over' en log de titel van de gevonden evenementen
const overResults = searchEvents("over");
console.log("\nZoekresultaten voor 'over':");
overResults.forEach(event => console.log(event.title));
// Verwijder het evenement met ID 1 en log het resultaat
console.log("\nEvenement 1 verwijderd:", removeEvent(1));
// Log de huidige evenementen na de verwijdering
console.log("\nHuidige Evenementen:", events);
