"use strict";
let myName = 'Dave';
let meaningOfLife;
let isLoading;
let album;
let bugFix;
let re = /\w+/g;
let stringArr = ['one', 'Hey', 'Dave'];
let guitars = ['strat', 'Les Gram', 5302];
let mixedData = ['EVN', 1245, true];
let test = [];
let bands = [];
//Tuple
let myTuple = ['Dave', 43, true];
let mixed = ['Hohn', 1, false];
//object
let myObj = {};
const exapleObj = {
    prop1: 'Ram',
    prop2: true
};
let abc = {
    name: "Eddie",
    active: true,
    albums: [34]
};
//function
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
console.log(greetGuitarist(abc));
stringArr.push("teo");
meaningOfLife = 23;
isLoading = true;
album = "false";
const sum = (a, b) => {
    return a + b;
};
console.log(sum(23, "45"));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
let xyz = {
    name: 'Ram',
    active: false,
    albums: [23, 'sdf']
};
//Literal types
let myNameIs;
let userName;
userName = 'Dave';
//function
const sub = (a, b) => {
    return a - b;
};
const logMsg = (message) => {
    console.log(message);
};
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//Rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
