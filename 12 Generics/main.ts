// Generics are a language independent concept (exist in C++ as well)
// Let’s learn it via an example

// 1. Problem Statement
// Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.

type Input = number | string;

function firstEle(arr: Input[]) {
    return arr[0];
}

const el = firstEle([1, 2, 3]);

console.log(el);

// What is the problem in this approach?
// 1.) User can send different types of values in inputs, without any type errors
    
    // const el = getFirstElement([1, 2, '3']);

// Typescript isn’t able to infer the right type of the return type. (type-narrowing)

    // const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
    // console.log(el.toLowerCase())

// Solution - Generics
// Generics enable you to create components that work with any data type while still providing compile-time type safety.

function identity<T>(arg: T):T {
    return arg;
}

let output1 = identity<string>("sdsggs");
let output2 = identity<number>(54);

// Now you can see, output1 and output2 on hovering show the type it gets and not the number | string.

// So the solution to our above question now is

function firstElement<T>(arr: T[]):T {
    return arr[0];
}

const el0 = firstElement([1, 2, 3]);
// const el1 = firstElement<number>([1, 2, '3']);
const el2 = firstElement(["Kshitiz", "vardhan"]);
// const el3 = firstElement<string>(["Kshitiz", 2]);
const el4 = firstElement(["Kshitiz", 2]);

console.log(el2.toUpperCase());
