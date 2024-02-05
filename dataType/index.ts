
let num : number = 4;
let str:String = "dkslkd";
let bol : boolean = true;
let arr : number[] = [1,2,3];

// interface
interface User{
 name : string;
 age? : number;
 color: string; 
}

// classes

class UserInfo{
      name:string;
      age:number;
      clas:number;
    constructor(name:string , age:number, clas:number){
        this.name = name;
        this.age = age;
        this.clas = clas;
    }
};
// const user:User = new UserInfo("ajay", 20, 10);
// console.log(user);


// unknown
let a:unknown = 10; // when we dont know what  is the type


// never
let b: never;  // never means no possible value asigned

// 

type Home = {
  name : string;
  color : string;
}

let home : Home = {name : "abc", color: "blue"};
let user : User = {name : "abc", color : "red"}

home = user;




interface user1 extends User{
    bike : boolean;
}

const user1:user1 = {name : "skalks", color : "skals", bike : true};
// console.log(user1);


// tuple
type Car = {a : number} & {b : number};

class Bmw implements Car{
 a=10;
 b=30;
}

const bmw:Bmw = new Bmw();
// console.log(bmw);

// functions

function list(str:string | string[]):string | string[]{ 
 
    if(typeof str == "string"){
            return "dsl";
    }else{
        return str;
    }
};

// genrics

// type BackPack = Array<string>;
// type BackPack1 = Array<string>;
// let backPack : BackPack = [];


interface BackPack<Type> {
    add : (obj : Type)=>void;
    get : ()=>Type
};



declare const backPack:BackPack<string>;
const object = backPack.get();
// console.log(object);







