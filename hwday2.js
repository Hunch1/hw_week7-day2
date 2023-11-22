//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function favorite_dishes(person) {
    for (let key in person) {
        // "The Array.isArray() static method determines whether the passed value is an Array."
        if (Array.isArray(person[key])) {
            // if an array display its elements
            console.log(`${key}: ${person[key].join(",  ")}`);
        } else if (typeof person[key] === 'object') {
            // if an object, iterate through its prperties
            console.log(`${key}:`);
            // this would display shakes:object object tho
            for (let key2 in person[key][0]) {
                console.log(`${key2}: ${person[key][0][key2]}`);
            }
        } else {
            // any other properties would display directly
            console.log(`${key}: ${person[key]}`);
        }
    }
}

favorite_dishes(person3);
//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
class Person{
    // creat construtor for name and age
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    // arrow function for printinfo mthod
    print_info = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
    // arrow function for addage method
    add_age = (years) => {
        this.age += years;
    };
}

// the two people i created
const person1 = new Person("Peter Parker", 28);
const person2 = new Person("Eddie Brock", 30);

// displays their info
person1.print_info();
person2.print_info();

// increment said age by given values
person1.add_age(3)
person2.add_age(1)

// prints their info with the incremented age
// why is javascript so ugly : ( 
person1.print_info();
person2.print_info();




// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/

const fetch_data = async () => {
    const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
    const data = await response.json()
    console.log(data)

} 

fetch_data();




// CODE WARS PROBELMS
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function count_vowels(add_astring){
    //  our set of vowels
    const vowels = new Set(['a', 'e' , 'i', 'o', 'u']);
    // converts the string to an array
    const sentence = add_astring.split('');
    // "The filter() method of Array instances creates a shallow copy of a portion of a given array, 
    // filtered down to just the elements from the given array that pass the test implemented 
    // by the provided function."
    const vowel_filter = sentence.filter(char => vowels.has(char));
    // return the count of vowels
    return vowel_filter.length;


}

console.log(count_vowels("hello")); // 2 (e, o)
console.log(count_vowels("what the dog doing")); // 5 (a,e,o,o,i)
console.log(count_vowels("what it do")); // 3 (a, i, o)



// description
// Write a function which converts the input string to uppercase.

function conver_uppercase(add_astring) {
    return add_astring.toUpperCase();
}

console.log(conver_uppercase("move mountains"))
console.log(conver_uppercase("i'm on the highway to hell"))
console.log(conver_uppercase("don't stop me now"))