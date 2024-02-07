"use strict";
let num = 4;
let str = "dkslkd";
let bol = true;
let arr = [1, 2, 3];
// classes
class UserInfo {
    constructor(name, age, clas) {
        this.name = name;
        this.age = age;
        this.clas = clas;
    }
}
;
// const user:User = new UserInfo("ajay", 20, 10);
// console.log(user);
// unknown
let a = 10; // when we dont know what  is the type
// never
let b; // never means no possible value asigned
let home = { name: "abc", color: "blue" };
let user = { name: "abc", color: "red" };
home = user;
const user1 = { name: "skalks", color: "skals", bike: true };
class Bmw {
    constructor() {
        this.a = 10;
        this.b = 30;
    }
}
const bmw = new Bmw();
// console.log(bmw);
// functions
function list(str) {
    if (typeof str == "string") {
        return "dsl";
    }
    else {
        return str;
    }
}
;
;
const seat = "dkslk" /* SeatChoice.AISLE */;
// console.log( typeof seat);
class Basket {
    constructor(name) {
        this.name = name;
    }
    getBasketName() {
        return this.name;
    }
    get getCount() {
        return Basket._count;
    }
    set setName(newName) {
        this.name = newName;
    }
}
Basket._count = 0;
class SuperBasket extends Basket {
    constructor(name, req) {
        super(name);
        this.required = req;
    }
    static lowerCase(name) {
        return this._count.toString();
    }
}
;
const superBasket = new SuperBasket("ajy", 10);
console.log(SuperBasket.lowerCase("sa"));
