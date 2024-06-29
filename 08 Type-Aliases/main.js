"use strict";
// We’ve been using object types and union types by writing them directly in type annotations. This is convenient, But it’s common to want to use the same type more than once and refer to it by a single name.
// Exactly the same as the earlier example
const printCoord = (pt) => {
    console.log(pt.x);
    console.log(pt.y);
};
printCoord({ x: 100, y: 100 });
const printId = (id) => {
    console.log(`Your id is ${id}`);
};
printId("4324bfsdj");
printId(5212);
