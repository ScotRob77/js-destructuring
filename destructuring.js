/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages; //the same thing as above
console.log(john, mary, joe)

// Destructuring objects
let jobs = {
    mike: "dj",
    dave: "MC",
    olivia: "singer",
};
let {mike, dave, olivia} = jobs
console.log(mike, dave, olivia)

// Destructuring subsets
let languages = ["english", "scottish", "spanish", "french", "welsh"];
let [mikeNative, mikeAlso] = languages;
console.log(mikeNative, mikeAlso);
let [, , joNative, joAlso] = languages;
console.log(joNative, joAlso);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "scottish",
    thirdLanguage: "french",
    fourthLanguage: "welsh"
}
let {secondLanguage, fourthLanguage} = languages2;
console.log(secondLanguage, fourthLanguage)
// Using rest parameter syntax

// let fruits = ['apples', 'bananas', 'pears', 'pineapple'];
// let [favFruit, secondFavFruit, ...rest] = fruits;
// console.log(favFruit);
// console.log(secondFavFruit);
// console.log(rest);

let cars = {
    jack: 'alfa romeo',
    john: 'fiat',
    steve: 'ferrari',
    paul: 'maserati'
};

let { paul, jack, ...rest} = cars
console.log(paul)
console.log(jack)
console.log(rest)
