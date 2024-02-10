"use strict";
function concat(str) {
    return str;
}
class Sellable {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
}
;
const course = new Sellable();
console.log(course.addItem({ name: "xyz", fee: 80 }));
