"use strict";
function getSmallPet() {
    // between 1-2
    const random = Math.floor((Math.random() * 2)) + 1;
    if (random == 1) {
        return { swim: () => { return undefined; } };
    }
    else {
        return { fly: () => { return undefined; } };
    }
}
;
// let pet = getSmallPet();
// let fishPet = pet as Fish;
// let birdPet = pet as Bird;
// if(fishPet){   wrong way it will give you error
//      fishPet.swim()
// }
// how to solve this problem 
function isFish(pet) {
    return "swim" in pet;
}
// if(isFish(pet)){
//     console.log("swim" in  pet);
// }
// case 2 ------------------>
const zoo = [getSmallPet(), getSmallPet(), getSmallPet()];
const padder = { getPaddingString: () => "i am padder" };
