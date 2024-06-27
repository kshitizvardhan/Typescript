"use strict";
// Two ways to declare variables in typescript with specifying types
// 1
let x = 10;
//2
let y = 1;
// You can't change the type of a variable once it is declared
// x = "helloww"; // This will throw an error
// You can also declare variables with the any type
let z = 5;
z = "hello"; // then this is allowed.
console.log(x);
console.log(z);
// Now run tsc -b command on terminal to transpile the code and the the compiler generates the .js file for it, which then can be run on browser and node.js... if there is an error, the generation to .js fails
// Important .ts files do not run on the browser nor node.js

/* THIS IS COMPILER/TRANSPILER GENERATED */