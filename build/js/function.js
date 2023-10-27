"use strict";
//function 
// Literal types
// Literal types are very useful to keep code DRY(Don't Repeat Yourself)
let myNameFn;
let userNameFn;
userNameFn = 'Dave';
//function
const addFn = (a, b) => {
    return a + b;
};
const logMsgFn = (message) => {
    console.log(message);
};
let multiplyFn = function (c, d) {
    return (c * d);
};
//optional parameters 
const addAllFn = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default parameters 
const sumAllFn = (a, b, c = 6) => {
    return a + b + c;
};
//rest parameter
const totalFn = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
//never type
const createErrFn = (errMsg) => {
    throw new Error(errMsg);
};
// use of the never type
const nnumOrStr = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createErrFn('This should never happen');
};
