// ways to declare array

const arr2:number[] = [1,2,3,4,5]

const arr3:Array<number> = [1,2,3,4,5]  

const fruits:string[] = ["apple","mango","banana"]

const fruits2:Array<string> = ["apple","mango","banana"]

// Unions in Array

const arr4:Array<number|string> = [1,2,3,4,5,"hello"]


// Tuples
const t:[number,string] = [1,"hello"]
console.log(t);