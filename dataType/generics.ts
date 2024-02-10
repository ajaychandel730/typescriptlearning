
function concat<T>(str:T):T{
 return str;
}


interface Curses{
    name : string;
    fee : number;
}

interface Quiz{
    name : string;
    fee : number;
}

class Sellable<T>{
    public items:T[] = [];
    public addItem(item:T){
     this.items.push(item);
    }
};

const course: Sellable<Curses> = new Sellable<Curses>();
console.log(course.addItem({name: "xyz", fee :80}));

