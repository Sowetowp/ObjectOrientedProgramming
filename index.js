// class: a template for JavaScript objects
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
class 