"use strict";
class Doc {
    constructor(content) {
        this.content = content;
    }
    print() {
        console.log(this.content);
    }
}
const myDocument = new Doc("Dit is een document om af te drukken.");
myDocument.print();
