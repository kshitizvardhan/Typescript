interface User {
    firstName: string,
    lastName: string,
    age: number,
    email?: string
}

const isLegal = (user: User) => {
    if(user.age >= 18){
        console.log("legal")
    } else console.log("not legal");
}

const greet = (user: User) => {
    console.log(`Hello ${user.firstName} ${user.lastName}.`)
}

isLegal({firstName: "Kshitiz", lastName: "Vardhan", age: 18});
greet({firstName: "Kshitiz", lastName: "Vardhan", age: 18});