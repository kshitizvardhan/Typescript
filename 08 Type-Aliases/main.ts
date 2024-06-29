// We’ve been using object types and union types by writing them directly in type annotations. This is convenient, But it’s common to want to use the same type more than once and refer to it by a single name.

// A type alias is exactly that - a name for any type. The syntax for a type alias is:

type Point = {
    x: number;
    y: number;
};
   
// Exactly the same as the earlier example
const printCoord = (pt: Point) => {
    console.log(pt.x);
    console.log(pt.y);
}
   
printCoord({ x: 100, y: 100 });

// So by using alias, the code looks more cleaner, easier to read and maintainable

// You can actually use a type alias to give a name to any type at all, not just an object type. 
// For example, a type alias can name a union type:

type ID = number | string;

const printId = (id: ID) => {
    console.log(`Your id is ${id}`);
}

printId("4324bfsdj");
printId(5212);

// So this means types aliases create NEW types ??
// No, type aliases are simply alternate names for a type. They do not create new types, but rather provide a way to refer to a type by a different name. This means that when you use a type alias, TypeScript treats it exactly the same as the original type.

// For example below is the two types which are both string, so re-assigning them with a string, don't show an error as not of type RawUserInput or SanitizedUserInput, as under the hood these are strings only.
// TypeScript treats them as the same type, so there's no additional type safety enforcement.


/*
        type RawUserInput = string;
        type SanitizedUserInput = string;

        function sanitizeInput(input: RawUserInput): SanitizedUserInput {
            // Imagine sanitize is a function that removes unsafe characters
            return sanitize(input);
        }

        function processInput(input: SanitizedUserInput) {
            // Process the sanitized input
        }

        let rawInput: RawUserInput = getInput(); // raw user input
        let sanitizedInput: SanitizedUserInput = sanitizeInput(rawInput); // sanitized input

        processInput(sanitizedInput); // Valid
*/

// In this example, RawUserInput and SanitizedUserInput are both string types but using different aliases helps clarify the code's intent. 
// However, TypeScript treats them as the same type, so there's no additional type safety enforcement.