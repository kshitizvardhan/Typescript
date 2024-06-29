// To define an object type, we simply list its properties and their types.

const printCoord = (a: {x:number, y:number}) => {
    console.log(a.x);
    console.log(a.y);
}

printCoord({x:3,y:5});


// Object types can also specify that some or all of their properties are optional. To do this, add a ? after the property name:

function printName(obj: { first: string; last?: string }) {
    // Error - might crash if 'obj.last' wasn't provided!
    // console.log(obj.last.toUpperCase());
    //'obj.last' is possibly 'undefined'.
    
    if (obj.last !== undefined) {
      // OK
      console.log(obj.last.toUpperCase());
    }
   
    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());   // this is more cleaner then above
  }

printName({first:"kshitiz", last:"vardhan"});