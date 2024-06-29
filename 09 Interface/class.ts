// The Person interface defines a contract that any implementing class must follow.

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

// The Employee class implements the Person interface, which means it must provide implementations for all the properties and methods defined in the Person interface.

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

// Create an instance of Employee
const emp = new Employee("Kshitiz", 21);

// Call the method
emp.greet("Hello");

// interface are not in the final js files

