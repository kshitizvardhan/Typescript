// So every agrument/param must have a type
// function name(params:type) {
    
// }


function greet(x:string, age:number, check18:boolean) {
    console.log(`Hello ${x}`);
    console.log(`Ages is ${age}`);
    if(check18){
        console.log("Adult");
    } else {
        console.log("MINOR");
    }
}

greet("Kshitiz", 19, true);

/*
PS C:\Users\kshit\OneDrive\Desktop\Learning-TypeScript\02 Basic-Types> node .\main.js
Hello Kshitiz
Ages is 19
Adult
*/