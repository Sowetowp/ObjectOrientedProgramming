// Object-oriented programming(oop) is a programming paradigm that organizes software design around objects, rather than functions and logic.
// OOP allows objects to interact with each other using four basic principles: encapsulation, inheritance, polymorphism, and abstraction.
// class: a template for JavaScript objects
// You will get an error if you do not follow the "strict mode" rules.

// structure
class ClassName {
    constructor() {

    }
}

// Usage sample
class Profile {
    constructor(firstName, lastName, age, dob, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.dob = dob;
        this.address = address
    }
}

const myProfile = new Profile("Abdulmalik", "Amzat", 23, "28/10", "Lagos, Nigeria")
console.log(myProfile)

// class methods
// this is basically what encapsulation is: the bundling of data and methods operating on the data into one unit.
class calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b
    }
    specialAdd(x) {
        return this.a + this.b + x
    }
}

const prompt = new calculator(2, 4)
console.log(prompt.add())
console.log(prompt.specialAdd(5))

// Class Inheritance.
// where you can derive a class from another class to form a hierarchy of classes that share a set of attributes and methods.
class detailedProfile extends Profile {
    constructor(firstName, lastName, age, dob, address, role) {
        super(firstName, lastName, age, dob, address)
        this.role = role;
    }

    bio() {
        return `${this.firstName} is a ${this.age}-years-old ${this.role}`
    }
}

const myProfile2 = new detailedProfile("Abdulmalik", "Amzat", 23, "28/10", "Lagos, Nigeria", "fullstack developer")
console.log(myProfile2.bio())

// static method
// getter/setter
class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // Setter for full name
    set fullName(value) {
        const parts = value.split(' ');
        if (parts.length === 2) {
            this._firstName = parts[0];
            this._lastName = parts[1];
        } else {
            throw new Error('Invalid full name');
        }
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}

const person = new Person('John', 'Doe');
person.fullName = 'Jane Smith';  // Sets the new name
console.log(person.fullName);
// note how we didn't invoke fullname method

class Language {
    constructor(name) {
        this.name = name;
    }
    static hello() {
        return "Hello!!";
    }
}

const myLanguage = new Language("Ford");

// You can call 'hello()' on the Language Class:
console.log(Language.hello());

// But NOT on a Language Object:
// console.log(myLanguage.hello());
// this will raise an error.

// ABSTRACTION:used to hide unnecessary information and display only necessary information to the users interacting.
// The internal method _startEngine() is a private method that handles the engine start, hidden from the user. When the user calls the start() method, they don't need to know the details of how the engine is started
// The user interacts only with the public methods (start, accelerate, stop), while the complex details are abstracted away in the private method _startEngine()
class Bus {
    constructor(brand) {
        this.brand = brand;
        this.speed = 0;
    }

    // Public method to start the Bus
    start() {
        console.log(`${this.brand} Bus started.`);
        this._startEngine();
    }

    // Public method to accelerate
    accelerate() {
        this.speed += 10;
        console.log(`${this.brand} is accelerating. Speed: ${this.speed} km/h`);
    }

    // Public method to stop the Bus
    stop() {
        this.speed = 0;
        console.log(`${this.brand} has stopped.`);
    }

    // Private method to start the engine (abstraction)
    _startEngine() {
        console.log("Engine started. Ready to go!");
    }
}

const myBus = new Bus("Toyota");
myBus.start();     // Accessible
myBus.accelerate(); // Accessible
myBus.stop();       // Accessible

// Polymorphism: in programming gives a program the ability to redefine methods for derived classes
// The base class Animal defines a method makeSound(). Each subclass (Dog, Cat, and Cow) overrides this method to provide its own specific behavior.
class Animal {
    // Base class method
    makeSound() {
        console.log("This animal makes a sound");
    }
}

class Dog extends Animal {
    // Overriding the makeSound method
    makeSound() {
        console.log("Dog barks: Woof Woof!");
    }
}

class Cat extends Animal {
    // Overriding the makeSound method
    makeSound() {
        console.log("Cat meows: Meow Meow!");
    }
}

class Cow extends Animal {
    // Overriding the makeSound method
    makeSound() {
        console.log("Cow moos: Moo Moo!");
    }
}

// Polymorphism in action
const animals = [new Dog(), new Cat(), new Cow()];

animals.forEach((animal) => {
    animal.makeSound(); // Each animal calls its own overridden makeSound method
});

// NOTE: Unlike functions, class declarations are not hoisted. That means that you must declare a class before you can use it.