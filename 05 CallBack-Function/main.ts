// How to give the type of the function

const runFunction_1 = (fn: () => void) => {
    setTimeout(fn, 2000);
}

const runFunction_2 = (fn: () => number) => {
    setTimeout(() => {
        const result = fn();
        console.log(result); // Handle the result of the number function
    }, 5000);
}

const greet = () => {
    console.log("Hello there!!");
    // as it returns nothing so its a void
}

const add = (a:number, b:number): number => {
    return a+b;
}

// Pass the function itself, not the result of invoking it.
runFunction_1(greet);

// Wrap the add function call in another function that matches the expected signature.
runFunction_2(() => add(5,5));
