// TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators. Now that we know how to write a few types, it’s time to start combining them in interesting ways.

// But they are not NEW, its just alternate names for a type

// 1. The first way to combine types you might see is a union type. A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.

const printId = (id: number | string) => {
    console.log(`Your id is ${id}`);
}

printId("4324bfsdj");
printId(5212);

// TypeScript will only allow an operation if it is valid for every member of the union. 
// For example, if you have the union string | number, you can’t use methods that are only available on string:
/*
    function printId(id: number | string) {
    console.log(id.toUpperCase());
    
    error:
    Property 'toUpperCase' does not exist on type 'string | number'.
    Property 'toUpperCase' does not exist on type 'number'.
    }

*/

// The solution is to narrow the union with code, the same as you would in JavaScript without type annotations. Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.
// For example, TypeScript knows that only a string value will have a typeof value "string":

const printId2 = (id: number | string) => {
    if(typeof(id) === "string"){
        console.log(`Your id is ${id.toUpperCase()}`);
    } else {
        console.log(`Your id is ${id}`);
    }
}

printId2("4324bfsdj");
printId2(5212);

// Sometimes you’ll have a union where all the members have something in common. 
// For example, both arrays and strings have a slice method. 
// If every member in a union has a property in common, you can use that property without narrowing:

const printFirstFive = (input: string | number[]) => {
    console.log(input.slice(0, 5)); // No need for type narrowing because both strings and arrays have `slice`
}

printFirstFive("Hello, world!");  // Output: Hello
printFirstFive([1, 2, 3, 4, 5, 6, 7]); // Output: [1, 2, 3, 4, 5]
