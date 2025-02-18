/*
Liam Matheson
W#0494713
PROG2700 EXERCISE 2
2025-01-23
*/

// Part 1: Variables and Constants

// 1.
let height = 170;

// 2.
const userAge = 30;

// Part 2: Arrays

// 1.
let petNames = [
    "Hewey",
    "Dewey",
    "Lewey"
];
console.log(petNames);

// 2.
petNames.pop();
console.log(petNames);

petNames.push("Lewey");
console.log(petNames);
// 3.
petNames.reverse();
console.log(petNames);

// Part 3: Objects

// 1.
const car = {
    make:"Kea",
    model:"Drivesmobile",
    year:"1983",
    color:"red"
};

// 2.

Object.defineProperty(car, "model", {value:"Torunga"});
console.log(car);

// 3.

car.miles = 100000;
console.log(car.miles);

// Part 4: Type Operations

// 1.

const slicedPets = petNames.slice(1,2);
console.log(slicedPets);

let myString = "peter piper picked a peck of pickled peppers";
let myString2 = myString.indexOf("pepper");
console.log(myString2);

let myStringLength = myString.length;
console.log(myStringLength);

