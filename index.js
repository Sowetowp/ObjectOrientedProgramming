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
// a brief 
class calculator{
    constructor(a, b){
        this.a = a;
        this.b = b;
    }

    add(){
        return this.a + this.b
    }
    specialAdd(x){
        return this.a + this.b + x
    }
}

const prompt = new calculator(2, 4)
console.log(prompt.add())
console.log(prompt.specialAdd(5))