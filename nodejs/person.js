class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    greeting() {
        console.log(`${this.name} is ${this.age} years old and is working as a ${this.job}`);
    }
}


//Code for Person Class to be used on other js files
module.exports = Person;