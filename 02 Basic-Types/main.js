"use strict";
function greet(x, age, check18) {
    console.log(`Hello ${x}`);
    console.log(`Ages is ${age}`);
    if (check18) {
        console.log("Adult");
    }
    else {
        console.log("MINOR");
    }
}
greet("Kshitiz", 19, true);
