"use strict";
const printId = (id) => {
    console.log(`Your id is ${id}`);
};
printId("4324bfsdj");
printId(5212);
const printId2 = (id) => {
    if (typeof (id) === "string") {
        console.log(`Your id is ${id.toUpperCase()}`);
    }
    else {
        console.log(`Your id is ${id}`);
    }
};
printId2("4324bfsdj");
printId2(5212);
const printFirstFive = (input) => {
    console.log(input.slice(0, 5));
};
printFirstFive("Hello, world!");
printFirstFive([1, 2, 3, 4, 5, 6, 7]);
