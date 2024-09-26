// class: a template for JavaScript objects
// You will get an error if you do not follow the "strict mode" rules.

// structure
class className {
    constructor() {

    }
}

// usage sample
class profile {
    constructor(firstName, lastName, age, dob, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.dob = dob;
        this.address = address
    }
}

const myProfile = new profile("Abdulmalik", "Amzat", 23, "28/10", "Lagos, Nigeria")
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

// Class Inheritance
// where you can derive a class from another class to form a hierarchy of classes that share a set of attributes and methods.
class detailedProfile extends profile {
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

class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello!!";
    }
}
  
const myCar = new Car("Ford");
  
  // You can call 'hello()' on the Car Class:
  console.log(Car.hello());
  
  // But NOT on a Car Object:
  // console.log(myCar.hello());
  // this will raise an error.
  
// ABSTRACTION:used to hide unnecessary information and display only necessary information to the users interacting


// NOTE: Unlike functions, class declarations are not hoisted. That means that you must declare a class before you can use it