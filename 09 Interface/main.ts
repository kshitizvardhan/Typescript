// An interface declaration is another way to name an object type:

// what is the difference between interfaces and types ?
// Ans: One of the reason is interfaces can be implemented as classes but types cannot be.

interface Point {
    x: number;
    y: number;
}
   
function printCoord(pt: Point) {
    console.log(pt.x);
    console.log(pt.y);
}
   
printCoord({ x: 100, y: 100 });