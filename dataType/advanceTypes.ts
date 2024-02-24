// 1
type Fish = {
    swim : ()=>void;
}

type Bird = {
    fly : ()=>void;
}

function getSmallPet():(Fish | Bird){
    // between 1-2
    const random:number = Math.floor((Math.random() * 2)) + 1; 
    if(random == 1){
       return {swim : ()=>{return undefined;}}
    }else{
      return {fly : ()=> {return undefined;}}
    }
}; 



// let pet = getSmallPet();
// let fishPet = pet as Fish;
// let birdPet = pet as Bird;

// if(fishPet){   wrong way it will give you error
//      fishPet.swim()
// }


// how to solve this problem 
function isFish(pet : (Fish | Bird)):pet is Fish{
  return "swim" in pet;
}

// if(isFish(pet)){
//     console.log("swim" in  pet);
// }

// case 2 ------------------>

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
// const underWater1: Fish[] = zoo.filter(isFish);
// console.log(underWater1);
// or, equivalently
// const underWater2: Fish[] = zoo.filter<Fish>(isFish);
// console.log(underWater2);
// const underWater3: Fish[] = zoo.filter<Fish>((pet) => isFish(pet)); how to solve this issue

// in operator ------------------------> muiltple way solve this issue but i am using in operator here.
// const underWater3: Fish[] = zoo.filter<Fish>((pet):pet is Fish => "swim" in pet);

// instance of (type guard)

interface Padder {
    getPaddingString(): string;
  }

  const padder:Padder = {getPaddingString : ()=> "i am padder"};




