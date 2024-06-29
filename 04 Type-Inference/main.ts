// type inference- the compiler knows the returnType to be a boolean implicitly, so we didnt write it explicitly.
// But Usually a good practice to write it.
const isLegal = (age:number) => {
    if(age >= 18){
        return true;
    } else return false;
}

console.log(isLegal(19));

/*

const isLegal = (age:number):boolean => {
    if(age >= 18){
        return true;
    } else return false;
}

*/